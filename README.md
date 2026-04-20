# Grace International School

![App Preview](https://imgix.cosmicjs.com/cd0638a0-3c60-11f1-b186-117430a97b22-autopilot-photo-1543610892-0b1f7e6d8ac1-1776652187937.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js website for Grace International School showcasing programs, team members, case studies, and testimonials.

## Features
- 🎓 Programs showcase with detailed information
- 👨‍🏫 Team member profiles
- 📚 Case studies and success stories
- 💬 Parent and student testimonials
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e58f071e803e708f6acca7&clone_repository=69e590461e803e708f6acceb)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: Grace International School strives to prepare its students for academic success in today's world, equipping them with the tools needed to grow and thrive.
>
> At Grace, we believe education is more than academic performance. Quality education works to holistically support students academically, socially, emotionally and spiritually.
>
> Grace prioritises each child's total well-being as they progress in their academic journey from Pre-Nursery to A Levels."

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: programs, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Grace International School strives to prepare its students for academic success in today's world, equipping them with the tools needed to grow and thrive. At Grace, we believe education is more than academic performance. Quality education works to holistically support students academically, socially, emotionally and spiritually. Grace prioritises each child's total well-being as they progress in their academic journey from Pre-Nursery to A Levels.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with configured bucket

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch programs
const { objects } = await cosmic.objects
  .find({ type: 'programs' })
  .depth(1)
```

## Cosmic CMS Integration
The app integrates with Cosmic CMS using object types: programs, team-members, case-studies, and testimonials.

## Deployment Options
- Vercel (recommended)
- Netlify

<!-- README_END -->