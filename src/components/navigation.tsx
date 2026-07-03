'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X, LogOut, User } from 'lucide-react'

export function Navigation() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobBoard
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/jobs" className="text-slate-600 hover:text-slate-900">
            Browse Jobs
          </Link>

          {session?.user ? (
            <>
              {session.user.role === 'EMPLOYER' && (
                <Link
                  href="/employer/dashboard"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Dashboard
                </Link>
              )}
              {session.user.role === 'JOB_SEEKER' && (
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-slate-900"
                >
                  My Applications
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="btn btn-primary"
              >
                <LogOut size={18} className="mr-2" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="btn btn-secondary">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn btn-primary">
                Sign Up
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
        <div className="md:hidden border-t border-slate-200 py-4 px-4 space-y-4">
          <Link
            href="/jobs"
            className="block text-slate-600 hover:text-slate-900"
          >
            Browse Jobs
          </Link>

          {session?.user ? (
            <>
              {session.user.role === 'EMPLOYER' && (
                <Link
                  href="/employer/dashboard"
                  className="block text-slate-600 hover:text-slate-900"
                >
                  Dashboard
                </Link>
              )}
              {session.user.role === 'JOB_SEEKER' && (
                <Link
                  href="/dashboard"
                  className="block text-slate-600 hover:text-slate-900"
                >
                  My Applications
                </Link>
              )}
              <button
                onClick={() => signOut()}
                className="btn btn-primary w-full"
              >
                <LogOut size={18} className="mr-2" />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="btn btn-secondary w-full">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn btn-primary w-full">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
