import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ea0208c9/health", (c) => {
  return c.json({ status: "ok" });
});

// AI Chat endpoint - OpenAI integration
app.post("/make-server-ea0208c9/ai/chat", async (c) => {
  try {
    const { messages, mode } = await c.req.json();
    const openAIKey = Deno.env.get("OPENAI_API_KEY");

    if (!openAIKey) {
      console.log("OpenAI API key error: OPENAI_API_KEY environment variable not set");
      return c.json({ 
        error: "OpenAI API key not configured. Please set OPENAI_API_KEY in environment variables." 
      }, 500);
    }

    // System prompts based on mode
    const systemPrompts = {
      discovery: "You are an AI assistant helping users discover the right projects in Abed Kadaan's portfolio. Ask about their needs, tech stack preferences, industry, and recommend relevant projects. Be conversational and helpful.",
      filter: "You are helping users find specific projects in a portfolio. Based on their query, identify relevant projects by tech stack, industry, or category.",
      scope: "You are helping users scope their project and recommend the right service package. Ask about timeline, budget, and requirements. Recommend packages when appropriate: Landing Page ($500), Shopify Store ($750), Simple Web App ($1,500), or Headless eCommerce ($2,500). For complex needs, recommend custom engagement.",
      context: "You are answering questions about Abed Kadaan's 18 years of engineering experience, leadership roles at Emirates, PlutoTV, Equinox, and expertise in mobile apps, web platforms, and eCommerce.",
      intake: "You are helping collect information about a potential project. Ask clarifying questions and pre-fill form data based on conversation."
    };

    const systemPrompt = systemPrompts[mode as keyof typeof systemPrompts] || systemPrompts.discovery;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.log(`OpenAI API error: ${response.status} - ${errorData}`);
      return c.json({ 
        error: `OpenAI API request failed: ${response.status}` 
      }, response.status);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return c.json({ message: assistantMessage });

  } catch (error) {
    console.log(`AI chat error: ${error.message}`);
    return c.json({ 
      error: `Failed to process AI request: ${error.message}` 
    }, 500);
  }
});

// Calendar availability endpoint - Cal.com integration
app.get("/make-server-ea0208c9/calendar/availability", async (c) => {
  try {
    const calcomApiKey = Deno.env.get("CALCOM_API_KEY");
    
    if (!calcomApiKey) {
      console.log("Cal.com API key not configured");
      // Return mock availability for demo
      return c.json({
        slots: [
          { time: "Today at 2:00 PM EST", available: true },
          { time: "Tomorrow at 10:00 AM EST", available: true },
          { time: "Thursday at 3:00 PM EST", available: true },
        ]
      });
    }

    // In production, fetch real availability from Cal.com
    const response = await fetch("https://api.cal.com/v1/availability", {
      headers: {
        "Authorization": `Bearer ${calcomApiKey}`,
      },
    });

    const data = await response.json();
    return c.json(data);

  } catch (error) {
    console.log(`Calendar availability error: ${error.message}`);
    return c.json({ 
      error: `Failed to fetch availability: ${error.message}` 
    }, 500);
  }
});

// Stripe payment intent endpoint
app.post("/make-server-ea0208c9/payment/create-intent", async (c) => {
  try {
    const { packageId, amount } = await c.req.json();
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");

    if (!stripeKey) {
      console.log("Stripe secret key not configured");
      return c.json({ 
        error: "Payment processing not configured. Please set STRIPE_SECRET_KEY in environment variables." 
      }, 500);
    }

    const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        amount: (amount * 100).toString(), // Convert to cents
        currency: "usd",
        "metadata[package_id]": packageId,
      }).toString(),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.log(`Stripe API error: ${response.status} - ${errorData}`);
      return c.json({ 
        error: `Payment processing failed: ${response.status}` 
      }, response.status);
    }

    const data = await response.json();
    return c.json({ clientSecret: data.client_secret });

  } catch (error) {
    console.log(`Payment intent creation error: ${error.message}`);
    return c.json({ 
      error: `Failed to create payment intent: ${error.message}` 
    }, 500);
  }
});

// Contact form submission
app.post("/make-server-ea0208c9/contact/submit", async (c) => {
  try {
    const formData = await c.req.json();
    
    // Store in KV store
    const submissionId = `contact_${Date.now()}`;
    await kv.set(submissionId, formData);

    // In production, also send email notification
    console.log(`Contact form submitted: ${JSON.stringify(formData)}`);

    return c.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you within 24 hours." 
    });

  } catch (error) {
    console.log(`Contact form submission error: ${error.message}`);
    return c.json({ 
      error: `Failed to submit form: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);