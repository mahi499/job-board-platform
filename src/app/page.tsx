'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Find Your Dream Job
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Discover thousands of job opportunities from top companies worldwide. Or post your job to reach thousands of talented professionals.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/jobs" className="btn btn-primary text-lg">
                  Browse Jobs
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/auth/signup" className="btn btn-secondary text-lg">
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
              Why Choose JobBoard?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Thousands of Jobs
                </h3>
                <p className="text-slate-600">
                  Access hundreds of job listings from leading companies across industries.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Top Talent
                </h3>
                <p className="text-slate-600">
                  Connect with qualified professionals ready to join your team.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Zap className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Quick & Easy
                </h3>
                <p className="text-slate-600">
                  Simple, fast, and transparent job posting and application process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of job seekers and employers on JobBoard today.
            </p>
            <Link href="/auth/signup" className="btn bg-white text-blue-600 hover:bg-blue-50 text-lg">
              Create Account
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
