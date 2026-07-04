import Link from 'next/link'
import { ArrowRight, Briefcase, Building2, Users, Search } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">
            🚀 AI Powered Job Portal
          </span>

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
            Find Your
            <span className="text-blue-600"> Dream Job </span>
            Today
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
            Browse thousands of verified opportunities from top companies.
            Connect with employers and build your career faster.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="/jobs"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              Browse Jobs
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/auth/signup"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Briefcase className="mx-auto text-blue-600" size={45} />

            <h2 className="text-4xl font-bold mt-4">
              500+
            </h2>

            <p className="text-slate-500 mt-2">
              Active Jobs
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Building2 className="mx-auto text-green-600" size={45} />

            <h2 className="text-4xl font-bold mt-4">
              100+
            </h2>

            <p className="text-slate-500 mt-2">
              Companies
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <Users className="mx-auto text-purple-600" size={45} />

            <h2 className="text-4xl font-bold mt-4">
              2000+
            </h2>

            <p className="text-slate-500 mt-2">
              Candidates
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Why Choose JobBoard?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white rounded-3xl shadow-md p-8">

            <Search className="text-blue-600" size={40} />

            <h3 className="text-2xl font-bold mt-5">
              Smart Search
            </h3>

            <p className="mt-4 text-slate-600">
              Search jobs by title, company and location with instant filtering.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <Building2 className="text-green-600" size={40} />

            <h3 className="text-2xl font-bold mt-5">
              Top Companies
            </h3>

            <p className="mt-4 text-slate-600">
              Explore opportunities from trusted employers across industries.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-8">

            <Users className="text-purple-600" size={40} />

            <h3 className="text-2xl font-bold mt-5">
              Career Growth
            </h3>

            <p className="mt-4 text-slate-600">
              Discover internships, full-time jobs and career opportunities.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-20">

        <div className="text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Career?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Join thousands of professionals finding their dream jobs.
          </p>

          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition"
          >
            Explore Jobs
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  )
}