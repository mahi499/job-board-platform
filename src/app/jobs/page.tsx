'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import JobCard from '@/components/JobCard'

interface Job {
  id: string
  title: string
  company: string
  location: string
  description: string
  jobType: string
  category?: string
  salaryMin?: number
  salaryMax?: number
  publishedAt: string
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  async function fetchJobs() {
    try {
      const res = await fetch('/api/jobs')
      const data = await res.json()
      setJobs(data.jobs || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const value = search.toLowerCase()

    return (
      job.title.toLowerCase().includes(value) ||
      job.company.toLowerCase().includes(value) ||
      job.location.toLowerCase().includes(value)
    )
  })

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

          <div className="max-w-7xl mx-auto px-6 py-20">

            <h1 className="text-5xl md:text-6xl font-extrabold">
              Find Your Dream Job
            </h1>

            <p className="mt-5 text-lg text-blue-100 max-w-2xl">
              Discover opportunities from top companies and apply with confidence.
            </p>

            <input
              type="text"
              placeholder="🔍 Search jobs by title, company or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-10 w-full max-w-3xl rounded-2xl p-5 text-black shadow-2xl outline-none"
            />

          </div>

        </section>

        {/* Statistics */}

        <section className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {jobs.length}
              </h2>
              <p className="text-slate-500 mt-2">
                Jobs Available
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h2 className="text-3xl font-bold text-green-600">
                100+
              </h2>
              <p className="text-slate-500 mt-2">
                Companies
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h2 className="text-3xl font-bold text-purple-600">
                1000+
              </h2>
              <p className="text-slate-500 mt-2">
                Candidates
              </p>
            </div>

          </div>

        </section>

        {/* Jobs */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          {loading && (
            <div className="text-center text-2xl font-semibold text-blue-700 py-20">
              Loading Jobs...
            </div>
          )}

          {!loading && filteredJobs.length === 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-16 text-center">

              <h2 className="text-4xl font-bold text-slate-800">
                No Jobs Found
              </h2>

              <p className="mt-4 text-slate-500">
                There are currently no jobs available.
              </p>

            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">

            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}