'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MapPin, DollarSign, Briefcase } from 'lucide-react'
import type { Job } from '@/types'

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/jobs?limit=6')
      const data = await res.json()
      setJobs(data.jobs || [])
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-lg text-slate-600">
            Explore the latest opportunities from top companies
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-600">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 mb-4">No jobs available yet</p>
            <Link href="/auth/signup" className="btn btn-primary">
              Post First Job
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`}>
                <div className="card p-6 h-full hover:shadow-lg cursor-pointer">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-primary-600 font-medium">{job.company}</p>
                  </div>

                  <div className="space-y-3 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.jobType}
                    </div>
                    {job.salaryMin && job.salaryMax && (
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 flex-wrap mb-4">
                    {job.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="badge badge-primary text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="btn btn-primary w-full text-sm">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/jobs" className="btn btn-outline">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
