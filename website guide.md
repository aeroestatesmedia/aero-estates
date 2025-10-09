Create a modern, high-performance website for Aero Estates Limited using the latest web development technologies and best practices. Build a production-ready, fully responsive application with exceptional UX.

## TECH STACK REQUIREMENTS

### Core Framework
- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### UI Components & Design System
- **shadcn/ui** for component library
- **Radix UI** primitives (via shadcn/ui)
- **Lucide React** for icons
- **Framer Motion** for animations

### Additional Libraries
- **React Hook Form** + **Zod** for form validation
- **next-themes** for dark mode support (optional)
- **React Intersection Observer** for scroll animations
- **Resend** or **Nodemailer** for contact form emails

### Performance & SEO
- Next.js Image optimization
- Metadata API for SEO
- Server-side rendering where appropriate
- Sitemap generation
- Analytics integration ready

## PROJECT STRUCTURE
aero-estates/
├── app/
│   ├── layout.tsx                 # Root layout with navigation
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   ├── digital-marketing/
│   │   ├── equity-analysis/
│   │   ├── real-estate-solutions/
│   │   └── technology-architecture/
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── services-grid.tsx
│   │   ├── about-section.tsx
│   │   ├── why-choose-us.tsx
│   │   └── cta-section.tsx
│   ├── services/
│   │   ├── service-card.tsx
│   │   └── service-hero.tsx
│   ├── contact/
│   │   └── contact-form.tsx
│   └── shared/
│       ├── page-header.tsx
│       ├── section-wrapper.tsx
│       └── animated-section.tsx
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── constants.ts              # Site constants
│   └── animations.ts             # Animation variants
├── public/
│   ├── images/
│   └── logos/
└── types/
└── index.ts                  # TypeScript types

## COMPANY INFORMATION

**Company Details:**
- Name: Aero Estates Limited
- Founded: January 2024
- Location: Dublin 15, Ireland
- Tagline: "Your partners in digital marketing, equity analysis, real estate solutions and technology architecture"

**Core Services:**
1. Digital Marketing - Strategic campaigns, brand development, content creation
2. Equity Analysis - Financial modeling, investment insights, market research
3. Real Estate Solutions - Property consulting, market analysis, listing expertise
4. Technology Architecture - Solutions design, system integration, digital infrastructure

**Brand Voice:**
- Professional yet approachable
- Clear and concise (UK English)
- Partnership-focused
- Innovation-driven

## DESIGN SYSTEM SPECIFICATIONS

### Color Palette (Tailwind Classes)
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',  // Sky blue - trust & innovation
          600: '#0284c7',
          900: '#0c4a6e',
        },
        accent: {
          500: '#f59e0b',  // Amber - energy & warmth
          600: '#d97706',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          800: '#262626',
          900: '#171717',
        }
      },
    },
  },
}
Typography Scale

Display: 4xl-6xl (hero headings)
H1: 3xl-4xl
H2: 2xl-3xl
H3: xl-2xl
Body: base-lg
Small: sm
Font: Inter or Geist Sans for modern feel

Spacing System

Use Tailwind's spacing scale (4, 8, 16, 24, 32, 64, 96, 128px)
Sections: py-16 md:py-24 lg:py-32
Containers: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

Border Radius

Small: rounded-md (6px)
Medium: rounded-lg (8px)
Large: rounded-xl (12px)
Cards: rounded-2xl (16px)

DETAILED PAGE SPECIFICATIONS
1. HOMEPAGE (app/page.tsx)
Hero Section
typescript// Key Features:
- Full viewport height hero with gradient background
- Animated headline with Framer Motion
- Two-column layout: text left, visual/animation right
- Primary + secondary CTA buttons (shadcn Button)
- Scroll indicator at bottom

// Content:
Headline: "Building Digital Estates That Inspire, Engage and Endure"
Subheading: "Your partners in digital marketing, equity analysis, real estate solutions and technology architecture"
Primary CTA: "Start Your Journey" → /contact
Secondary CTA: "Explore Services" → /services

// Components to use:
- <Button> from shadcn/ui (primary & ghost variants)
- Framer Motion for fade-in and slide-up animations
- Custom gradient background using Tailwind
Services Grid Section
typescript// Layout:
- 2x2 grid on desktop, 1 column on mobile
- Card component from shadcn/ui
- Hover effects with smooth transitions
- Icon at top, heading, brief description, "Learn More" link

// Four service cards:
1. Digital Marketing
   Icon: <TrendingUp /> from Lucide
   Brief: "Boost reach with targeted digital campaigns"
   Link: /services/digital-marketing
   
2. Equity Analysis
   Icon: <LineChart />
   Brief: "Drive growth with expert equity analysis"
   Link: /services/equity-analysis
   
3. Real Estate Solutions
   Icon: <Building2 />
   Brief: "Unlock property potential with real estate expertise"
   Link: /services/real-estate-solutions
   
4. Technology Architecture
   Icon: <Network />
   Brief: "Empower business with seamless technology solutions"
   Link: /services/technology-architecture

// Interaction:
- Cards lift on hover (transform: translateY(-4px))
- Subtle shadow increase
- Icon color change to accent color
About Section (Brief)
typescript// Layout:
- Two-column layout: text left, image/graphic right
- max-w-4xl prose for text readability
- Fade-in animation on scroll

// Content:
"At Aero Estates, we specialise in digital marketing, equity analysis, real estate and technology architecture. We build strong partnerships to deliver clear, innovative strategies tailored to each client's goals.

Our team combines creativity, technology and insight to help brands grow and succeed in a changing market. We believe in personalised service, open collaboration and lasting value.

Whether working with startups or global brands, we are committed to excellence and innovation in every project. Your vision is our mission — together, we create digital estates that inspire, engage and endure."

// Components:
- <Badge> for "Est. 2024" or "Dublin, Ireland"
- Stats/numbers if available (animated counting)
Why Choose Us Section
typescript// Layout:
- 3-column grid (1 on mobile, 2 on tablet, 3 on desktop)
- Icon + heading + description for each benefit

// Four key benefits:
1. Multidisciplinary Expertise
   Icon: <Sparkles />
   Description: "Four core services under one roof: digital, financial, property and technical solutions"

2. Personalised Strategies
   Icon: <Target />
   Description: "Tailored approaches designed specifically for your goals and market position"

3. Innovation Focused
   Icon: <Zap />
   Description: "Cutting-edge solutions that keep you ahead in a rapidly evolving digital landscape"

4. Long-term Partnership
   Icon: <Handshake />
   Description: "We're committed to your sustained growth, not just one-off projects"
Final CTA Section
typescript// Layout:
- Centered content with gradient background
- Large heading + supporting text + button
- Full-width section with subtle pattern overlay

// Content:
Heading: "Ready to Build Your Digital Estate?"
Subtext: "Let's discuss how we can help your brand grow"
CTA Button: "Get In Touch" → /contact

// Styling:
- Background: gradient from primary-600 to primary-800
- Text: white
- Button: white background with primary text (high contrast)
2. SERVICES PAGES (Dynamic Structure)
Services Overview Page (/services)
typescript// Layout:
- Hero section with page title
- Grid of 4 detailed service cards
- Each card: icon, title, description, features list, CTA

// Features per service:

Digital Marketing:
- SEO & Content Strategy
- Social Media Management
- Web Design & Development
- Brand Identity & Positioning
- Analytics & Performance Tracking

Equity Analysis:
- Financial Modeling
- Investment Due Diligence
- Market Research & Insights
- Business Valuation
- Strategic Planning Support

Real Estate Solutions:
- Property Market Analysis
- Listing & Marketing Services
- Investment Opportunity Identification
- Portfolio Consulting
- Dublin Market Expertise

Technology Architecture:
- System Design & Integration
- Platform Development
- Digital Infrastructure Planning
- API & Database Design
- Scalable Solution Building
Individual Service Pages
typescript// Structure for each service page:

1. Hero Section
   - Service name
   - Compelling subtitle
   - Visual representing the service

2. Overview Section
   - What the service includes
   - Who it's for
   - Key benefits

3. Features/Offerings Grid
   - Detailed breakdown of specific services
   - Icon + title + description for each

4. Process Section (Optional)
   - Step-by-step how you work
   - Timeline expectations

5. Use Cases/Applications
   - Real-world scenarios
   - Industry applications

6. CTA Section
   - Service-specific call to action
   - Contact button

// Components to use:
- <Tabs> from shadcn/ui for multiple content sections
- <Accordion> for FAQs if needed
- <Card> for feature displays
- Custom gradient sections for visual interest
3. ABOUT PAGE (/about)
typescript// Sections:

1. Hero Section
   - "About Aero Estates"
   - Founded January 2024 in Dublin, Ireland

2. Mission & Vision
   - Company philosophy
   - What drives us
   - Our commitment to clients

3. Our Approach
   - Remote-first, flexible working
   - Collaborative methodology
   - Innovation-driven mindset

4. Values Section
   - Excellence
   - Innovation
   - Partnership
   - Integrity

5. Team & Culture
   - Student internship programme
   - Learning and growth focus
   - Professional development

6. Location
   - Dublin 15, Ireland
   - Remote operations
   - WeWork access for flexibility

// Design Elements:
- <Timeline> component for company journey
- <Avatar> components for team (if photos available)
- Stats/metrics animated on scroll
- Full-width image sections with overlay text
4. CONTACT PAGE (/contact)
typescript// Layout: Two-column layout

// Left Column: Contact Form
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: 'digital-marketing' | 'equity-analysis' | 'real-estate' | 'technology-architecture' | 'general';
  message: string;
}

// Form Components:
- <Input> for name, email, company
- <Select> for service interest
- <Textarea> for message
- <Button> for submit with loading state
- <Label> for all fields
- Form validation using Zod schema
- Error messages using <FormMessage>
- Success notification using <Toast>

// Right Column: Contact Information
- Email address
- Location: Dublin 15, Ireland
- Social media links (LinkedIn, Instagram, Facebook, X)
- Office model explanation: "Remote-first with WeWork access"
- Map or location graphic (optional)

// Form Validation Schema:
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  service: z.enum(['digital-marketing', 'equity-analysis', 'real-estate', 'technology-architecture', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// API Route (/app/api/contact/route.ts):
- Validate form data with Zod
- Send email using Resend or Nodemailer
- Return success/error response
- Rate limiting for security
NAVIGATION & LAYOUT
Navbar Component
typescript// Features:
- Sticky/fixed position with backdrop blur
- Aero Estates logo (left)
- Navigation links (center):
  - Home
  - Services (with dropdown/mega menu showing 4 services)
  - About
  - Contact
- CTA button "Get Started" (right)
- Mobile: Hamburger menu with <Sheet> from shadcn/ui
- Smooth scroll behavior
- Active link highlighting

// Styling:
- Background: white with border-b (light mode)
- Shadow on scroll (use useScroll from Framer Motion)
- Height: h-16 or h-20
- Container: max-w-7xl mx-auto

// Components to use:
- <NavigationMenu> from shadcn/ui for desktop
- <Sheet> for mobile menu
- Custom logo component
- <Button> for CTA
Footer Component
typescript// Layout: 4-column grid on desktop, stack on mobile

// Column 1: Brand
- Aero Estates logo
- Tagline
- Copyright © 2024 Aero Estates Limited

// Column 2: Services
- Links to 4 service pages

// Column 3: Company
- About
- Contact
- Careers (if applicable)

// Column 4: Connect
- Social media icons (LinkedIn, Instagram, Facebook, X)
- Email address

// Bottom Section:
- Privacy Policy | Terms of Service | Sitemap
- "Built with Next.js" or similar credit

// Styling:
- Background: neutral-900 (dark)
- Text: neutral-400
- Links hover: text-white transition
- Subtle top border or gradient
ANIMATION & INTERACTIONS
Page Transitions
typescript// Use Framer Motion for smooth animations

// Fade-in on mount:
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Stagger children:
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scroll-triggered animations:
- Use <motion.div> with viewport prop
- whileInView={{ opacity: 1, y: 0 }}
- initial={{ opacity: 0, y: 50 }}
Micro-interactions
typescript// Button hover effects:
- Scale up slightly (scale: 1.02)
- Subtle shadow increase
- Smooth color transitions

// Card hover:
- Lift up (translateY: -8px)
- Shadow elevation
- Border color change

// Link hover:
- Underline animation (scale from 0 to 1)
- Color transition

// Form focus:
- Ring color (focus-visible:ring-2)
- Label color change
- Smooth transitions
Loading States
typescript// Use <Skeleton> from shadcn/ui for loading states
// Spinner for form submissions
// Progressive image loading with blur placeholder
RESPONSIVE DESIGN BREAKPOINTS
typescript// Tailwind breakpoints:
- sm: 640px   (mobile landscape)
- md: 768px   (tablet)
- lg: 1024px  (desktop)
- xl: 1280px  (large desktop)
- 2xl: 1536px (extra large)

// Key responsive adjustments:
- Grid columns: 1 → 2 → 3 → 4
- Text sizes: text-2xl md:text-4xl lg:text-5xl
- Padding: py-12 md:py-20 lg:py-32
- Navigation: mobile menu below lg:
- Hero: stack on mobile, two-column on lg+
- Services: 1 column → 2 columns (md) → 2x2 grid (lg)
PERFORMANCE OPTIMIZATION
Image Optimization
typescript// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority // for hero images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  className="object-cover"
/>

// Image formats:
- WebP for modern browsers
- JPEG fallback
- SVG for icons and logos
Code Splitting
typescript// Use dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/contact/contact-form'), {
  loading: () => <Skeleton className="h-96" />,
});
Font Optimization
typescript// Use next/font
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
SEO IMPLEMENTATION
Metadata Configuration
typescript// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Aero Estates | Digital Marketing, Equity Analysis, Real Estate & Tech Solutions',
    template: '%s | Aero Estates'
  },
  description: 'Dublin-based digital agency specialising in digital marketing, equity analysis, real estate solutions and technology architecture. Build digital estates that inspire, engage and endure.',
  keywords: ['digital marketing Dublin', 'equity analysis Ireland', 'real estate solutions', 'technology architecture', 'digital agency Dublin'],
  authors: [{ name: 'Aero Estates Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aeroestates.ie',
    siteName: 'Aero Estates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aero Estates - Building Digital Estates'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aero Estates',
    description: 'Building digital estates that inspire, engage and endure',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Individual page metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
    description: 'Explore our digital marketing, equity analysis, real estate and technology architecture services',
  };
}
Structured Data
typescript// Add JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aero Estates Limited",
  "url": "https://aeroestates.ie",
  "logo": "https://aeroestates.ie/logo.png",
  "description": "Digital marketing, equity analysis, real estate solutions and technology architecture services",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dublin",
    "addressRegion": "Dublin 15",
    "addressCountry": "IE"
  },
  "foundingDate": "2024-01",
  "sameAs": [
    "https://linkedin.com/company/aero-estates",
    "https://instagram.com/aeroestates",
    "https://facebook.com/aeroestates",
    "https://twitter.com/aeroestates"
  ]
};
ACCESSIBILITY (WCAG 2.1 AA)
Requirements
typescript// Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- <nav>, <main>, <footer>, <article>, <section> tags
- <button> for interactive elements (not <div>)

// Keyboard Navigation
- Tab order follows visual flow
- Focus indicators visible (focus-visible:ring-2)
- Skip to main content link
- Escape key closes modals/sheets

// Screen Readers
- Alt text for all images
- aria-labels for icon buttons
- aria-describedby for form hints
- Proper form labels

// Color Contrast
- Text: 4.5:1 minimum ratio
- Large text: 3:1 minimum
- Test with contrast checker tools

// Focus Management
- Trap focus in modals
- Return focus after modal close
- Visible focus indicators
FORM IMPLEMENTATION
Contact Form Complete Example
typescript'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(['digital-marketing', 'equity-analysis', 'real-estate', 'technology-architecture', 'general'], {
    required_error: 'Please select a service',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: 'Message sent successfully!',
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error sending message',
        description: 'Please try again or email us directly.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="equity-analysis">Equity Analysis</SelectItem>
                  <SelectItem value="real-estate">Real Estate Solutions</SelectItem>
                  <SelectItem value="technology-architecture">Technology Architecture</SelectItem>
                  <SelectItem value="general">General Enquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide details about your requirements
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
CONTENT GUIDELINES
UK English Spelling

Specialise (not specialize)
Analyse (not analyze)
Organisation (not organization)
Colour (not color)
Centre (not center)
Optimise (not optimize)

Tone & Voice

Professional but warm
Clear and concise
Action-oriented
Partnership language ("we", "together", "your")
Avoid: jargon, AI-speak, excessive corporate buzzwords

Key Messaging

"Building digital estates that inspire, engage and endure"
"Your vision is our mission"
"From startups to global brands"
"Personalised strategies tailored to your goals"
"Excellence, innovation and lasting value"

DEPLOYMENT CHECKLIST
Pre-launch

 All pages complete and responsive
 Forms tested and working
 Images optimized (WebP, proper sizing)
 SEO metadata on all pages
 Sitemap.xml generated
 Robots.txt configured
 404 page created
 Loading states implemented
 Error boundaries added
 Analytics integration ready
 Contact form email delivery working

Performance Targets

 Lighthouse score 90+ (Performance)
 Lighthouse score 95+ (Accessibility)
 Lighthouse score 100 (Best Practices)
 Lighthouse score 100 (SEO)
 First Contentful Paint < 1.5s
 Largest Contentful Paint < 2.5s
 Cumulative Layout Shift < 0.1
 Time to Interactive < 3.5s

Browser Testing

 Chrome (latest)
 Firefox (latest)
 Safari (latest)
 Edge (latest)
 Mobile Safari (iOS)
 Chrome Mobile (Android)

Responsive Testing

 Mobile (320px - 480px)
 Tablet (768px - 1024px)
 Desktop (1280px+)
 Large desktop (1920px+)

ADDITIONAL FEATURES
Optional Enhancements

Blog/Insights Section

MDX for blog posts
Content collections
Syntax highlighting for code snippets


Case Studies/Portfolio

Project showcase grid
Detailed case study pages
Before/after comparisons


Testimonials

Client quotes carousel
Video testimonials
Star ratings


Newsletter Signup

Email capture form
Integration with email service


Cookie Consent

GDPR-compliant banner
Cookie preferences management


Live Chat

Chat widget integration (optional)
Or "Schedule a call" button



SUCCESS CRITERIA
The website must:
✓ Load in under 2 seconds on 4G
✓ Score 90+ on all Lighthouse metrics
✓ Be fully accessible (WCAG 2.1 AA)
✓ Work flawlessly on all screen sizes
✓ Clearly communicate all four service areas
✓ Generate contact form submissions
✓ Reflect modern, professional design standards
✓ Feel fast and responsive to user interactions
✓ Establish Aero Estates as innovative and trustworthy
✓ Stand out from typical agency websites
FINAL DELIVERABLES
Please provide:

Complete Next.js 14+ application

TypeScript throughout
App Router structure
All components implemented


shadcn/ui components integrated

Properly configured
Customized to brand colors


Fully responsive design

Mobile-first approach
Tested across devices


Working contact form

API route functional
Email delivery configured
Validation working


SEO optimized

Metadata on all pages
Sitemap generated
Structured data added


Performance optimized

Images optimized
Code split appropriately
Lazy loading implemented


Documented code

Clear component structure
README with setup instructions
Environment variables documented


Deployment ready

Configured for Vercel deployment
Environment setup guide
Domain configuration instructions




EXAMPLE: Hero Section Component
typescript'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building Digital Estates That{' '}
              <span className="text-primary-600">Inspire</span>,{' '}
              <span className="text-primary-600">Engage</span> and{' '}
              <span className="text-primary-600">Endure</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your partners in digital marketing, equity analysis, real estate solutions and technology architecture
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Add your hero image or animation here */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDown className="h-6 w-6 text-neutral-400" />
      </motion.div>
    </section>
  );
}