Design and build a world-class freelance portfolio website for Abed Kadaan — a Senior Director of Engineering and full-stack product specialist with 18 years of experience building apps for Emirates Airlines, PlutoTV, Lululemon, Ticketmaster, The Home Depot, and more.

**VISUAL DIRECTION**
Dark-mode first. Think editorial and cinematic — the aesthetic of a premium agency like Instrument or Ueno, not a typical developer portfolio. Use a near-black base (#0A0A0A), with a single accent color (deep electric blue or warm amber — propose both options). Typography should feel authoritative: a sharp geometric sans-serif for headings (Inter, Neue Haas Grotesk, or Söhne) paired with a clean body font. Generous whitespace. Full-bleed project imagery. Subtle grain texture overlay on hero sections. Micro-animations on scroll — elements fade and slide in with purpose, not gimmick. Cursor interactions that feel premium. Every section should feel like it belongs on Awwwards.

**SITE STRUCTURE**

Page 1 — Home / Hero
Full-viewport hero with Abed's name, title ("Senior Engineer · 18 Years · Web · Mobile · AI"), and a one-line value proposition. Immediately below or integrated into the hero: an AI-powered project discovery assistant — a tall, elegantly rounded chat input (not a standard search bar — think conversational, minimal, with a soft glow or pulse animation on focus). The assistant invites the visitor to describe what they're looking for ("Tell me what you're building...") and dynamically surfaces and filters relevant portfolio projects based on their input — matching against project type, tech stack, industry, company size, and pain points. Use OpenAI API for the conversation layer. Below the AI assistant: a subtle horizontal scroll of project category pills — Web Apps · Mobile Apps · eCommerce · Landing Pages · AI Tools.

Page 2 — Work / Portfolio
Masonry or editorial grid layout. Each project card shows: full-bleed hero image, project name, category tag, and tech stack pills. Hovering a card triggers a smooth overlay with a one-line project summary and a "View Case Study" CTA. Projects are filterable by category — Web App, Mobile App, eCommerce, Landing Page — with the AI assistant also living at the top of this page as a persistent filter layer.

Projects to include with their categories:
— Emirates Airlines · Mobile App · React Native
— PlutoTV · Mobile App · Swift · Kotlin Native
— Lululemon · Mobile App · React Native
— Ticketmaster · Mobile App · React Native
— The Home Depot · Mobile App · React Native
— Ski Dubai · Web App · React · Flask
— Aavrani · eCommerce · Headless Shopify · Next.js
— ThruDark · eCommerce · Shopify
— Tentree · eCommerce · Shopify
— Gretel NY · Web · React
— Mike Perry Studio · Web · React
— Jones BBQ · Web · WordPress
— Live Fit Apparel · eCommerce · React · FastAPI

Page 3 — Case Study Template (reusable for each project)
This is the most important page. Design it like an agency case study — not a bulleted list. Structure: full-bleed hero image with project name and category overlaid, followed by a two-column overview (Client, Industry, Role, Tech Stack, Year), then a flowing narrative layout — Challenge, Approach, Solution — with large pull quotes, inline screenshots, and result metrics displayed as large typographic numbers (e.g. "1.4★ → 4.6★" or "100,000+ Reviews"). At the bottom: 8-image visual gallery in a cinematic lightbox layout, a "Next Project" transition, and a sticky sidebar CTA ("Work with Abed").

Page 4 — About
Split layout. Left: a strong editorial portrait photo placeholder. Right: bio copy establishing 18 years of experience, companies worked with, engineering leadership background (led teams of up to 80 engineers at Equinox, PlutoTV, Emirates), and current focus on freelance product engineering and AI automation. Below: a horizontal logo strip of recognizable brand logos — Emirates, PlutoTV, Lululemon, Ticketmaster, The Home Depot, Equinox, Fox, Disney, ViacomCBS.

Page 5 — Services
This page must be the most visually stunning page on the site — high stickiness, wow-factor design, futuristic in feel. It is anchored by the AI assistant which plays a central role in helping the prospective client navigate what they need and recommending the right engagement type. The AI assistant should never quote a price directly in conversation — instead it guides the user toward a package or a custom engagement, and when a package is recommended, the user can click directly into it and pay on-site.

The page is structured in four distinct visual layers:

LAYER 0 — FOUNDER'S RATE (formerly "Budget-Friendly" — rebranded as exclusive and desirable)
A discreet but warm section positioned at the top of the services page, designed to feel like an insider opportunity rather than a discount tier. Headline: "Founder's Rate — For the Right Project." Copy: "I occasionally take on a small number of projects at a reduced rate — either because the problem is genuinely interesting, the industry is one I want to build in, or the timing is right. If your budget is tight but your vision is strong, tell me about it." CTA: "Tell the AI what you're building" — routes directly into the AI assistant in Scope & Recommend mode.

This tier serves a strategic dual purpose: it attracts early-stage founders and small businesses who become long-term clients, and it creates a pipeline of real completed work and platform reviews. When a Founder's Rate project is agreed upon, the client is gently guided — as a mutual favor — to create a verified account on Freelancer.com or Upwork, post the project there, and pay through the platform. This generates verifiable reviews and references on those platforms, which compounds credibility over time. This process is framed naturally and positively — not transactional — as "how I prefer to work with new clients."

Design this section to feel exclusive and human — not cheap. A handwritten-style accent font for "Founder's Rate," a warm subtle glow different from the rest of the page, and a two-line testimonial placeholder from a past founder client.

LAYER 1 — READY-TO-GO PACKAGES
Fast, fixed-scope engagements for clients who know what they want. These are purchasable directly on the site. Design these as sleek interactive cards — on hover or click, relevant portfolio examples for that package type slide in underneath as visual proof. This creates an implicit price signal — the client sees what others have paid for similar work without it being stated.

Packages and pricing:

► Landing Page — $500
A high-converting, fully responsive React landing page. Clean design, fast load, contact or lead capture form, deployed and ready. Turnaround: 5–7 days.
Portfolio examples surfaced on click:
— Nebula (Uruguay) · Tech agency marketing site · React · Bold purple brand identity, service tier layout, conversion-focused CTAs
— Clearwave · B2B SaaS startup · React · Minimal dark-mode landing page, animated feature sections, waitlist capture form
— PeakForm · Fitness coaching brand · React · Full-bleed hero video, trainer bio section, online booking CTA
— Harborline · Maritime logistics company · React · Clean corporate layout, service overview, contact form with location map

► Shopify Store Setup — $750
Premium Shopify theme purchased, branded, configured with your products, collections, payment gateway, and shipping rules. Deployed and documented.
Portfolio examples surfaced on click: ThruDark, Tentree.

► Simple Web App — $1,500
React frontend + Python FastAPI or Node.js backend. Authentication, database via Supabase or InstantDB, deployed on Vercel. Clean UI, mobile responsive, handover docs included. Turnaround: 10–14 days.
Portfolio examples surfaced on click:
— Ski Dubai · Indoor ski resort ticketing and booking platform · React + Flask
— Driftlog · Travel journaling web app for frequent flyers · React + FastAPI + Supabase · User auth, trip entries, photo uploads, shareable itinerary links
— VaultDesk · Internal tool for a boutique investment firm · React + FastAPI · Financial scenario modeling, PDF report export, Slack webhook notifications
— ShiftFlow · Staff scheduling tool for a regional restaurant group · React + Node.js + InstantDB · Role-based access, drag-and-drop shift builder, SMS alerts via Twilio

► React + Headless eCommerce — $2,500
Custom React/Next.js frontend decoupled from Shopify or another commerce backend. GraphQL Storefront API, persistent cart, Stripe checkout, SSR for SEO. Turnaround: 2–3 weeks.
Portfolio examples surfaced on click:
— Aavrani · Science-backed DTC hair and skincare brand · Headless Shopify + Next.js + GraphQL · Hair quiz, rewards programme, sub-second load times
— Luminary Supply Co. · Premium outdoor gear brand · Headless Shopify + React · Custom collection pages, bundle builder, loyalty tier integration
— Vessel · Direct-to-consumer beverage brand · Next.js + Shopify Storefront API · Subscription checkout, flavour selector, influencer referral tracking

LAYER 2 — CUSTOM ENGAGEMENTS
For clients with complex, large-scale, or ambiguous needs. No fixed price — the AI assistant helps qualify the scope and routes them to a discovery call or RFP submission. This section lives behind a dark full-bleed cinematic backdrop of silhouetted screenshots and motion stills from the commercial-scale projects — Emirates, PlutoTV, The Home Depot, Ticketmaster, Equinox — faded, atmospheric, aspirational.

Custom engagement types with sample companies and sample projects:

► Mobile App — Ground-Up Build or Rebuild
Sample: ClearVault (fintech) · React Native app replacing a legacy iOS codebase · biometric auth, real-time transaction sync, push notifications · iOS and Android simultaneously.
Sample: FormFlow (health & wellness) · Native iOS workout tracking app · Apple HealthKit, video playback, coach dashboard.
Inspired by: Emirates Airlines, Lululemon, Ticketmaster, The Home Depot.

► Streaming & Connected TV Platform
Sample: Wavelength (media) · Full streaming platform across iOS, Android, tvOS, Roku · live content scheduling, ad insertion, React-based CMS.
Inspired by: PlutoTV, Equinox Media.

► Full-Stack Web Application with AI Features
Sample: ContextIQ (B2B SaaS) · Internal reporting tool with natural language queries · React + FastAPI + OpenAI + role-based access + PDF export + Slack.
Sample: Rootline (DTC) · Customer-facing product recommendation engine · Next.js + LangChain + Stripe subscriptions + Supabase.

► eCommerce Platform Redesign & Re-architecture
Sample: TerrainCo (apparel) · Legacy WooCommerce migrated to headless Shopify · React/Next.js + Storefront API + loyalty rewards.
Inspired by: Aavrani, ThruDark, Tentree.

► Enterprise Web Platform or Portal
Sample: Meridian Capital Group (real estate investment) · Internal deal-flow management portal · multi-role auth + financial modeling + PDF generation + Slack + React + FastAPI.

LAYER 3 — AI ASSISTANT ON SERVICES PAGE
The assistant on this page operates in "Scope & Recommend" mode. It asks smart qualifying questions — what are you building, who is it for, what's your timeline, do you have a budget range in mind — and based on responses either surfaces a Ready-To-Go package with a "Pay Now" CTA, or flags it as a Custom Engagement and routes to a discovery call or RFP. The assistant never quotes a custom price. When it recommends a package, a glowing card animates into view with the package details and a direct payment button.

**AI ASSISTANT — PERSISTENT BEHAVIOUR ACROSS ALL PAGES**
The assistant is always present but never intrusive. Its default state is a slim, sticky, pill-shaped one-liner bar — minimal, elegant, always visible as the user scrolls. On click or focus it expands smoothly into a full conversational interface — rounded corners, dark frosted glass background, streaming response text, subtle pulse animation. On mobile it collapses to a floating icon that opens a bottom sheet.

The assistant bar always displays a small set of contextual action icons beside the input — visible on hover with animated tooltip labels. These icons shift based on which page the user is on but always include: a calendar icon ("Book a Call") that opens a live availability picker synced to Abed's calendar (Calendly or Cal.com integration), a phone icon ("Schedule a Call"), and a projects icon ("Browse Work"). When the user has been in conversation for more than two exchanges, a subtle animated message appears at the bottom of the assistant: "Want to jump on a quick call? I'm available —" followed by the next two available time slots as clickable chips. Clicking a chip opens the booking flow without leaving the page.

Each page gives the assistant a different mode:
— Home: Discovery mode — "Tell me what you're building"
— Work: Filter mode — surfaces and hides projects based on conversation
— Services: Scope & Recommend mode — qualifies the engagement and routes to package or custom
— About: Context mode — answers questions about Abed's background and experience
— Contact: Intake mode — pre-fills the contact form based on what was discussed, and surfaces live calendar availability for booking a Zoom or phone call directly from the assistant

**AI ASSISTANT TECHNICAL SPEC**
The AI chat component sends user messages to OpenAI's Chat Completions API (gpt-4o-mini for cost efficiency). Each project and each service package has a structured metadata object — name, category, tech stack, industry, company size, pain points, price, turnaround. The assistant reasons over this metadata to make recommendations. When a package is recommended, the frontend renders a live package card with a Stripe payment button. Custom engagements route to a calendar booking link or RFP form. Calendar integration uses Cal.com (open source, free tier available) or Calendly API to surface real-time availability. The model is system-prompted with all case study content, project attributes, pricing logic, and Abed's availability preferences.

**COMPONENTS TO DESIGN**
— Nav: minimal sticky top bar, logo left, links right, "Hire Me" CTA button with accent color
— Project Card: image-first, hover state with overlay, portfolio examples drawer on package click
— Case Study Hero: full-bleed, dark overlay, large serif project name
— Metric Block: oversized number + label, used in case studies
— AI Assistant Bar: slim pill default state, expands to full chat on click, frosted glass, streaming text, contextual action icons with animated tooltip labels, inline calendar availability chips
— Founder's Rate Section: warm glow, handwritten accent font, human tone, exclusive framing
— Package Card: icon + title + description + price + pay button, animated in on AI recommendation
— Custom Engagement Card: cinematic dark background, silhouette imagery, discovery CTA
— Logo Strip: grayscale brand logos, subtle scroll animation
— Footer: minimal, dark, links + copyright

**RESPONSIVE BEHAVIOUR**
Design for desktop first (1440px), then tablet (768px) and mobile (390px). On mobile the AI assistant collapses to a floating icon that expands into a bottom sheet. Project grid becomes single column. Case study narrative stacks vertically. Package cards stack full-width.

**TONE**
This is not a junior developer's portfolio. Every design decision should communicate seniority, taste, and craft. The kind of portfolio that makes a CTO or startup founder think — this person has done this at scale before. The Services page in particular should feel like walking into a flagship store — aspirational, confidence-inspiring, and effortlessly converting.