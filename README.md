# 🚀 AI Job Board Platform

A modern, responsive Job Board application built using **Next.js 14**, **TypeScript**, **Prisma ORM**, **PostgreSQL (Neon)**, **NextAuth**, and **Tailwind CSS**. The application allows users to register, log in, browse available jobs, and search for opportunities through a clean and intuitive interface.

---

## 🌐 Live Demo

**Vercel:**  
https://job-board-platform-eight.vercel.app

---

## 📂 GitHub Repository

https://github.com/mahi499/job-board-platform

---

# 📖 Project Overview

This project was developed as part of a Software Engineer assessment.

The goal was to build a modern job board application with authentication, database integration, responsive UI, CI/CD automation, and cloud deployment.

The project demonstrates full-stack development using the latest Next.js App Router architecture together with Prisma ORM and PostgreSQL.

---

# ✨ Features

## Authentication

- User Registration
- User Login
- Secure authentication using NextAuth
- Session management
- Logout functionality

---

## Job Board

- Browse available jobs
- Search jobs by:
  - Job Title
  - Company
  - Location
- Responsive job cards
- Modern UI design

---

## User Experience

- Responsive design
- Mobile-friendly navigation
- Beautiful gradients
- Modern cards
- Sticky navigation
- Professional footer

---

## Database

- PostgreSQL hosted on Neon
- Prisma ORM
- Seeded sample jobs
- Secure database connection

---

## Deployment

- GitHub Repository
- GitHub Actions CI
- Vercel Deployment

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | Frontend & Backend |
| React | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Prisma ORM | Database ORM |
| PostgreSQL (Neon) | Database |
| NextAuth | Authentication |
| GitHub Actions | CI/CD |
| Vercel | Deployment |

---

# 📁 Project Structure

```
src/
│
├── app/
│   ├── api/
│   ├── auth/
│   ├── jobs/
│   └── page.tsx
│
├── components/
│   ├── Navigation
│   ├── Footer
│   ├── JobCard
│   └── ...
│
├── lib/
│
├── types/
│
prisma/
│
.github/
│
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/mahi499/job-board-platform.git
```

Go inside the project

```bash
cd job-board-platform
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Seed the database

```bash
npm run seed
```

Start the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file.

```env
DATABASE_URL=

NEXTAUTH_URL=

NEXTAUTH_SECRET=

NEXT_PUBLIC_APP_URL=

RESEND_API_KEY=
```

---

# 🗄 Database

The project uses

- PostgreSQL
- Prisma ORM
- Neon Cloud Database

Seed data is provided through

```
prisma/seed.ts
```

---

# 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for Continuous Integration.

Pipeline steps:

- Checkout repository
- Install dependencies
- Generate Prisma Client
- Build project
- Verify production build

Workflow file:

```
.github/workflows/ci.yml
```

---

# ☁ Deployment

The application is deployed using **Vercel**.

Deployment process:

- Push code to GitHub
- GitHub Actions validates build
- Vercel automatically deploys latest commit
- Production environment variables configured in Vercel

---


# 🚀 Future Improvements

- Employer Dashboard
- Job Posting
- Resume Upload
- Apply to Jobs
- Admin Dashboard
- Email Notifications
- Filters
- Pagination
- Saved Jobs

---

# 👨‍💻 AI Usage

Artificial Intelligence tools were used to assist in:

- UI improvements
- Component generation
- Documentation
- GitHub Actions workflow
- Deployment troubleshooting
- Code optimization

All generated code was reviewed, integrated, tested, debugged, and customized before deployment.

---

# ✅ Build Status

- Authentication ✔
- Database ✔
- Prisma ✔
- Responsive UI ✔
- Search ✔
- GitHub Actions ✔
- Vercel Deployment ✔
- Production Build ✔

---

# 📄 License

This project was created for a Software Engineer technical assessment.

---

# 🙏 Acknowledgements

- Next.js
- Prisma
- NextAuth
- Neon
- Tailwind CSS
- Vercel
- GitHub Actions