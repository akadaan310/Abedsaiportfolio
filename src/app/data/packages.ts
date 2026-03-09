export interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  turnaround: string;
  features: string[];
  examples: {
    name: string;
    description: string;
    techStack: string;
  }[];
}

export const packages: Package[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: 500,
    description: 'A high-converting, fully responsive React landing page. Clean design, fast load, contact or lead capture form, deployed and ready.',
    turnaround: '5–7 days',
    features: [
      'Custom React design',
      'Fully responsive',
      'Lead capture form',
      'Fast loading (<2s)',
      'Deployment included',
      'Source code handover'
    ],
    examples: [
      {
        name: 'Nebula (Uruguay)',
        description: 'Tech agency marketing site · Bold purple brand identity, service tier layout, conversion-focused CTAs',
        techStack: 'React'
      },
      {
        name: 'Clearwave',
        description: 'B2B SaaS startup · Minimal dark-mode landing page, animated feature sections, waitlist capture form',
        techStack: 'React'
      },
      {
        name: 'PeakForm',
        description: 'Fitness coaching brand · Full-bleed hero video, trainer bio section, online booking CTA',
        techStack: 'React'
      },
      {
        name: 'Harborline',
        description: 'Maritime logistics company · Clean corporate layout, service overview, contact form with location map',
        techStack: 'React'
      }
    ]
  },
  {
    id: 'shopify-store',
    name: 'Shopify Store Setup',
    price: 750,
    description: 'Premium Shopify theme purchased, branded, configured with your products, collections, payment gateway, and shipping rules. Deployed and documented.',
    turnaround: '7–10 days',
    features: [
      'Premium theme setup',
      'Custom branding',
      'Product & collection setup',
      'Payment gateway config',
      'Shipping rules',
      'Documentation included'
    ],
    examples: [
      {
        name: 'ThruDark',
        description: 'Tactical apparel brand · Premium dark theme, military aesthetic, optimized product pages',
        techStack: 'Shopify'
      },
      {
        name: 'Tentree',
        description: 'Sustainable fashion · Tree-planting impact tracker, eco-focused design, subscription options',
        techStack: 'Shopify'
      }
    ]
  },
  {
    id: 'simple-web-app',
    name: 'Simple Web App',
    price: 1500,
    description: 'React frontend + Python FastAPI or Node.js backend. Authentication, database via Supabase or InstantDB, deployed on Vercel. Clean UI, mobile responsive, handover docs included.',
    turnaround: '10–14 days',
    features: [
      'React + FastAPI/Node.js',
      'User authentication',
      'Database integration',
      'Mobile responsive',
      'Deployment included',
      'Full documentation'
    ],
    examples: [
      {
        name: 'Ski Dubai',
        description: 'Indoor ski resort ticketing and booking platform',
        techStack: 'React + Flask'
      },
      {
        name: 'Driftlog',
        description: 'Travel journaling web app for frequent flyers · User auth, trip entries, photo uploads, shareable itinerary links',
        techStack: 'React + FastAPI + Supabase'
      },
      {
        name: 'VaultDesk',
        description: 'Internal tool for a boutique investment firm · Financial scenario modeling, PDF report export, Slack webhook notifications',
        techStack: 'React + FastAPI'
      },
      {
        name: 'ShiftFlow',
        description: 'Staff scheduling tool for a regional restaurant group · Role-based access, drag-and-drop shift builder, SMS alerts via Twilio',
        techStack: 'React + Node.js + InstantDB'
      }
    ]
  },
  {
    id: 'headless-ecommerce',
    name: 'React + Headless eCommerce',
    price: 2500,
    description: 'Custom React/Next.js frontend decoupled from Shopify or another commerce backend. GraphQL Storefront API, persistent cart, Stripe checkout, SSR for SEO.',
    turnaround: '2–3 weeks',
    features: [
      'Next.js + Headless Shopify',
      'GraphQL integration',
      'Stripe checkout',
      'SEO optimized (SSR)',
      'Custom design',
      'Performance optimized'
    ],
    examples: [
      {
        name: 'Aavrani',
        description: 'Science-backed DTC hair and skincare brand · Hair quiz, rewards programme, sub-second load times',
        techStack: 'Headless Shopify + Next.js + GraphQL'
      },
      {
        name: 'Luminary Supply Co.',
        description: 'Premium outdoor gear brand · Custom collection pages, bundle builder, loyalty tier integration',
        techStack: 'Headless Shopify + React'
      },
      {
        name: 'Vessel',
        description: 'Direct-to-consumer beverage brand · Subscription checkout, flavour selector, influencer referral tracking',
        techStack: 'Next.js + Shopify Storefront API'
      }
    ]
  }
];

export const getPackageById = (id: string): Package | undefined => {
  return packages.find(p => p.id === id);
};
