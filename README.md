# Job Board Platform

A modern, full-stack job board application built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

### For Job Seekers
- ✅ Browse and search job listings
- ✅ Filter jobs by category, location, and job type
- ✅ View detailed job information
- ✅ Apply for jobs with cover letters
- ✅ Track application status
- ✅ User profile management

### For Employers
- ✅ Post new job listings
- ✅ Manage posted jobs
- ✅ View and review applications
- ✅ Rate and provide feedback to candidates
- ✅ Analytics dashboard

### General Features
- ✅ Secure authentication with NextAuth
- ✅ Responsive design with Tailwind CSS
- ✅ Type-safe API with TypeScript
- ✅ Database with Prisma ORM
- ✅ Modern UI components with Lucide icons

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **UI Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (Neon or local)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahi499/job-board-platform.git
   cd job-board-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/database"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate-using: openssl rand -base64 32"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   NODE_ENV="development"
   ```

4. **Run database migrations**
   ```bash
   npm run prisma:migrate
   ```

5. **Generate Prisma client**
   ```bash
   npm run prisma:generate
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
job-board-platform/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── jobs/           # Job listing pages
│   │   ├── employer/       # Employer features
│   │   ├── dashboard/      # User dashboard
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   ├── lib/                # Utilities and configuration
│   │   ├── auth.ts        # NextAuth configuration
│   │   └── prisma.ts      # Prisma client
│   ├── types/              # TypeScript type definitions
│   └── middleware.ts       # Next.js middleware
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
├── .env.example            # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Available Scripts

```bash
npm run dev                # Start development server
npm run build              # Build for production
npm run start              # Start production server
npm run lint               # Run ESLint
npm run prisma:migrate     # Run database migrations
npm run prisma:generate    # Generate Prisma client
npm run prisma:studio      # Open Prisma Studio
```

## API Routes

### Authentication
- `POST /api/auth/signup` - Create new account
- `POST /api/auth/[...nextauth]` - NextAuth authentication

### Jobs
- `GET /api/jobs` - List all jobs (with filters)
- `POST /api/jobs` - Create new job (employer only)
- `GET /api/jobs/[id]` - Get job details
- `PUT /api/jobs/[id]` - Update job (owner only)
- `DELETE /api/jobs/[id]` - Delete job (owner only)

### Applications
- `GET /api/applications` - List applications (filtered)
- `POST /api/applications` - Submit job application
- `GET /api/applications/[id]` - Get application details
- `PUT /api/applications/[id]` - Update application status

### Users
- `GET /api/users/[id]` - Get user profile
- `PUT /api/users/[id]` - Update user profile

## Pages

### Public Pages
- `/` - Homepage with featured jobs
- `/jobs` - Browse all jobs
- `/jobs/[id]` - Job detail page
- `/auth/signin` - Sign in page
- `/auth/signup` - Sign up page

### Protected Pages (Job Seekers)
- `/dashboard` - My applications
- `/profile` - Edit profile

### Protected Pages (Employers)
- `/employer/dashboard` - Manage jobs
- `/employer/post` - Post new job
- `/employer/applications` - View applications

## Environment Variables

| Variable | Description | Example |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host/db` |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | JWT secret key | (Generate with: `openssl rand -base64 32`) |
| `NEXT_PUBLIC_APP_URL` | Public app URL | `http://localhost:3000` |
| `NODE_ENV` | Environment | `development` or `production` |

## Database Setup

### Using Neon (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to `.env.local` as `DATABASE_URL`

### Using Local PostgreSQL
1. Install PostgreSQL
2. Create a database: `CREATE DATABASE jobboard;`
3. Set `DATABASE_URL` to your local connection string

## Authentication

The application uses NextAuth.js with Credentials provider for authentication.

- **Sign Up**: Create new account with email and password
- **Sign In**: Authenticate with email and password
- **Sessions**: JWT-based sessions stored in browser
- **Protected Routes**: Middleware protects dashboard and employer routes

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

```bash
git push origin main
```

Then connect your Vercel project to GitHub.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please create an issue on GitHub.

---

**Happy job hunting! 🚀**
