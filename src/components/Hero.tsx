import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Connect with top employers and discover amazing career opportunities tailored to your skills.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link href="/jobs" className="btn btn-primary">
              <Search className="mr-2" size={20} />
              Browse Jobs
            </Link>
            <Link href="/auth/signup" className="btn btn-outline">
              Post a Job
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Job title, keywords..."
                className="input flex-1"
              />
              <input
                type="text"
                placeholder="Location"
                className="input flex-1 md:flex-none md:w-48"
              />
              <button className="btn btn-primary">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
