# AI Fashion Awards - She Is AI

A comprehensive web application for the AI Fashion Awards, featuring file uploads, authentication, payment processing, and video tutorials.

## 🚀 Project Status

### ✅ Completed
- Next.js 15 project setup with TypeScript and Tailwind CSS
- Landing page with hero section, mission, and categories
- **Caimera video tutorial section** with embedded videos
- 5 award categories showcase
- Responsive navigation and footer
- Login and application pages (placeholder)
- Video files organized in `/public/videos/`
- Documentation moved to `/docs/`

### 🔨 In Progress
- User authentication system (Supabase)
- File upload interface with bulk upload
- Category organization system
- Promo code validation
- Payment integration (Stripe)

### 📋 Next Steps
1. Set up Supabase project and configure authentication
2. Build upload interface with drag-and-drop
3. Implement payment processing
4. Create admin dashboard
5. Add email notifications

## 🏃 Getting Started

### Development Server

The server is already running! Visit:
- **Local:** http://localhost:3000
- **Network:** http://192.168.1.116:3000

To restart the server:
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
Fashion-Website-Test/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with all sections
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── login/             # Login page
│   └── apply/             # Application page
├── components/            # React components (to be added)
├── lib/                   # Utility functions
├── public/
│   └── videos/           # Website video files
│       ├── campaign-ideas.mp4
│       └── sketch-to-image.mp4
├── docs/                  # Documentation
│   ├── PRD.md            # Product Requirements Document
│   └── reference-videos/ # Original video files
└── package.json          # Dependencies

```

## 🎥 Video Files

The two Caimera tutorial videos are embedded in the landing page:
1. **Sketch to Image** - Shows the process of creating product images from sketches
2. **Campaign Ideas** - Demonstrates creating campaign and runway presentations

Videos are located at:
- `/public/videos/sketch-to-image.mp4`
- `/public/videos/campaign-ideas.mp4`

Original files saved in: `/docs/reference-videos/`

## 🔧 Configuration Needed

Before deploying, you'll need to set up:

1. **Supabase** (Authentication & Storage)
   - Create project at https://supabase.com
   - Copy credentials to `.env.local`

2. **Stripe** (Payment Processing)
   - Create account at https://stripe.com
   - Copy API keys to `.env.local`

3. **Email Service** (Notifications)
   - Set up SendGrid or Resend
   - Copy API key to `.env.local`

Copy `.env.local.example` to `.env.local` and fill in your credentials.

## 📦 Key Features

### Completed
✅ Responsive landing page
✅ Video tutorial section with Caimera attribution
✅ 5 award categories showcase
✅ Mission and how-to-enter sections
✅ Navigation and footer

### To Build
🔲 User authentication (signup, login, password recovery)
🔲 Bulk file upload with drag-and-drop
🔲 Visual category organization interface
🔲 File validation (size, resolution, format)
🔲 Progress saving and resume functionality
🔲 Promo code system
🔲 Payment integration
🔲 Admin dashboard
🔲 Email notifications

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (auth, database, storage)
- **Payment:** Stripe
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **File Upload:** React Dropzone
- **Forms:** React Hook Form + Zod

## 📝 Documentation

Full product requirements are in `/docs/PRD.md`

Key sections:
- Section 4.11: File Upload System
- Section 4.12: User Authentication
- Section 4.13: Promo Code System
- Section 4.14: Caimera Video Integration

## 🚢 Deployment

Recommended: **Vercel** (optimized for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📞 Support

For issues or questions about the codebase, check `/docs/PRD.md` for requirements and specifications.

---

**Built with ❤️ for She Is AI**
