# Aero Estates Website

A modern, high-performance website for Aero Estates Limited - a Dublin-based agency specialising in brand scaling, equity analysis, real estate solutions, and tech solutions.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Optimised for Vercel

## 📁 Project Structure

```
aero-estates/
├── app/                          # Next.js app directory
│   ├── about/                   # About page
│   ├── api/                     # API routes
│   │   └── contact/            # Contact form endpoint
│   ├── contact/                # Contact page
│   ├── services/               # Services pages
│   │   ├── brand-scaling/
│   │   ├── equity-analysis/
│   │   ├── real-estate-solutions/
│   │   └── tech-solutions/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── metadata.ts             # Structured data
├── components/                  # React components
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── home/                   # Homepage sections
│   ├── services/               # Service components
│   └── contact/                # Contact components
├── lib/                        # Utility files
│   ├── utils.ts               # Utility functions
│   ├── constants.ts           # Site constants
│   └── animations.ts          # Animation variants
├── types/                      # TypeScript types
└── public/                     # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd aero-estates
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Features

### Pages

- **Homepage:** Hero section, services grid, about preview, why choose us, CTA
- **Services Overview:** Detailed service listings with features
- **Individual Service Pages:** Brand Scaling, Equity Analysis, Real Estate Solutions, Tech Solutions
- **About:** Company information, values, approach, location
- **Contact:** Contact form with validation, contact information, social links

### Key Features

- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimised with metadata and structured data
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Smooth animations with Framer Motion
- ✅ Form validation with Zod
- ✅ Type-safe with TypeScript
- ✅ Modern UI with shadcn/ui components
- ✅ Performance optimised for Lighthouse scores 90+

## 🎨 Customisation

### Colors

The colour palette is defined in `app/globals.css`:
- **Primary:** Sky blue (#0ea5e9) - trust & innovation
- **Accent:** Amber (#f59e0b) - energy & warmth

### Content

Update company information in `lib/constants.ts`:
- Company details
- Services
- Social links
- Navigation links

### Components

All components are located in the `components/` directory and can be customised as needed.

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To enable email functionality:

1. Install an email service (e.g., Resend):
```bash
npm install resend
```

2. Add your API key to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

3. Uncomment the email code in `app/api/contact/route.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Import your repository on [Vercel](https://vercel.com)

3. Configure environment variables if using email service

4. Deploy!

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## 📊 Performance

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Copyright © 2024 Aero Estates Limited. All rights reserved.

## 🤝 Support

For support, email hello@aeroestates.ie or visit the contact page.

## 🌐 Links

- **LinkedIn:** [linkedin.com/company/aero-estates](https://linkedin.com/company/aero-estates)
- **Instagram:** [@aeroestates](https://instagram.com/aeroestates)
- **Facebook:** [facebook.com/aeroestates](https://facebook.com/aeroestates)
- **Twitter/X:** [@aeroestates](https://twitter.com/aeroestates)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
