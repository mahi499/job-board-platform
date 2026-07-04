'use client'

import Link from 'next/link'
import {
  MapPin,
  Building2,
  Clock,
  IndianRupee,
  Briefcase,
  ArrowRight
} from 'lucide-react'

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    description: string
    jobType: string
    category?: string
    salaryMin?: number | null
    salaryMax?: number | null
    publishedAt: string
  }
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      <div className="p-7">

        {/* Header */}
        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
              {job.title}
            </h2>

            <div className="flex items-center gap-2 mt-3 text-slate-600">
              <Building2 size={18} />
              <span>{job.company}</span>
            </div>

            <div className="flex items-center gap-2 mt-2 text-slate-500">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>

          </div>

          <span className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm">
            {job.jobType.replace('_', ' ')}
          </span>

        </div>

        {/* Description */}
        <p className="mt-6 text-slate-600 leading-7 line-clamp-3">
          {job.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-6">

          {job.category && (
            <span className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              <Briefcase size={15} />
              {job.category}
            </span>
          )}

          {(job.salaryMin || job.salaryMax) && (
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              <IndianRupee size={15} />
              {job.salaryMin?.toLocaleString()} - {job.salaryMax?.toLocaleString()}
            </span>
          )}

        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8 pt-5 border-t border-slate-100">

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={15} />
            Posted {new Date(job.publishedAt).toLocaleDateString()}
          </div>

          {/* IMPORTANT: Temporary link */}
          <Link
            href="/jobs"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            View Details
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </div>
  )
}