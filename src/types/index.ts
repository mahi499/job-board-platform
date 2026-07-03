export interface User {
  id: string
  email: string
  name: string
  role: 'JOB_SEEKER' | 'EMPLOYER' | 'ADMIN'
  image?: string
  createdAt: Date
}

export interface Job {
  id: string
  title: string
  description: string
  company: string
  location: string
  jobType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP'
  category?: string
  salaryMin?: number
  salaryMax?: number
  tags?: string[]
  requiredSkills?: string[]
  publishedAt: Date
  views: number
}

export interface JobApplication {
  id: string
  jobId: string
  userId: string
  coverLetter: string
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  appliedAt: Date
}
