# Premium Bento Grid Portfolio

A high-performance, design-centric portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Bento Grid Layout**: Modern, asymmetrical grid design.
- **Theme System**: Soft Dark and Paper Light modes with smooth transitions.
- **Animations**: Advanced Framer Motion orchestrations (Spring physics, Parallax, Staggered reveal).
- **Responsive**: Mobile-first design that adapts to any viewport.
- **Performance**: Optimized with Next.js App Router and Server Components.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

**Customize the content by editing `lib/data.ts`**.
This single file contains all the personal information, experience, projects, and skills data used throughout the site.

## Project Structure

- `app/`: Application routes, global layout, and SEO files.
- `components/ui/`: Reusable UI primitives (BentoCard, Button, etc.).
- `components/sections/`: Page sections (Hero, Skills, Experience, Projects).
- `lib/data.ts`: **Central configuration file for all portfolio content.**
- `lib/utils.ts`: Utility functions.
