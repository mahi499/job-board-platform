'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">JB</span>
          </div>
          <span className="font-bold text-lg text-slate-900">JobBoard</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/jobs" className="text-slate-700 hover:text-primary-600 transition">
            Browse Jobs
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-primary-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-primary-600 transition">
            Contact
          </Link>
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="text-slate-700 hover:text-primary-600 transition">
                Dashboard
              </Link>
              {session.user?.role === 'ADMIN' && (
                <Link href="/admin" className="text-slate-700 hover:text-primary-600 transition">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="btn btn-secondary text-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="btn btn-secondary text-sm">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn btn-primary text-sm">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-slate-50">
          <div className="container py-4 space-y-4">
            <Link href="/jobs" className="block text-slate-700 hover:text-primary-600">
              Browse Jobs
            </Link>
            <Link href="/about" className="block text-slate-700 hover:text-primary-600">
              About
            </Link>
            <Link href="/contact" className="block text-slate-700 hover:text-primary-600">
              Contact
            </Link>
            {session ? (
              <>
                <Link href="/dashboard" className="block text-slate-700 hover:text-primary-600">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="btn btn-secondary w-full text-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="btn btn-secondary w-full text-sm">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="btn btn-primary w-full text-sm">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
