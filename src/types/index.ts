export type UserRole = 'JOB_SEEKER' | 'EMPLOYER' | 'ADMIN';

export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'TEMPORARY' | 'INTERNSHIP';

export type ApplicationStatus = 'PENDING' | 'REVIEWED' | 'SHORTLISTED' | 'REJECTED' | 'ACCEPTED';

export type NotificationType = 
  | 'APPLICATION_SUBMITTED' 
  | 'APPLICATION_STATUS_CHANGED' 
  | 'NEW_JOB_POSTED' 
  | 'JOB_EXPIRING_SOON' 
  | 'MESSAGE';

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  role: UserRole;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio: string | null;
  location: string | null;
  phone: string | null;
  skills: string[];
  experience: string | null;
  education: string | null;
  resumeUrl: string | null;
  portfolioUrl: string | null;
  linkedInUrl: string | null;
  githubUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  jobType: JobType;
  salaryMin: number | null;
  salaryMax: number | null;
  currency: string;
  category: string;
  tags: string[];
  requiredSkills: string[];
  postedBy: string;
  publishedAt: Date;
  expiresAt: Date | null;
  views: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: ApplicationStatus;
  appliedAt: Date;
  updatedAt: Date;
  coverLetter: string | null;
  rating: number | null;
  feedback: string | null;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  data: Record<string, any> | null;
  createdAt: Date;
  updatedAt: Date;
}
