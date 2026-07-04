'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import {
  Menu,
  X,
  LogOut,
  Briefcase,
  UserCircle
} from 'lucide-react'

export function Navigation() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/jobs" className="flex items-center gap-3">

            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white">
              <Briefcase size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                JobBoard
              </h1>

              <p className="text-xs text-slate-500">
                Find Your Dream Job
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/jobs"
              className="font-medium text-slate-600 hover:text-blue-600 transition"
            >
              Browse Jobs
            </Link>

            {/* Show these only if the pages exist later */}
            {/* <Link href="/dashboard">Dashboard</Link> */}

            {session?.user ? (
              <>

                <div className="flex items-center gap-2 text-slate-700">

                  <UserCircle size={22} />

                  <span className="font-medium">
                    {session.user.email}
                  </span>

                </div>

                <button
  onClick={() =>
    signOut({
      callbackUrl: "/auth/signin",
    })
  }
  className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
>
  <LogOut size={18} />
  Sign Out
</button>

              </>
            ) : (
              <div className="flex gap-3">

                <Link
                  href="/auth/signin"
                  className="rounded-xl border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/signup"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-white transition hover:shadow-lg"
                >
                  Sign Up
                </Link>

              </div>
            )}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="border-t bg-white p-6 md:hidden">

          <div className="space-y-4">

            <Link
              href="/jobs"
              className="block rounded-lg p-2 hover:bg-slate-100"
            >
              Browse Jobs
            </Link>

            {session?.user ? (

              <button
                onClick={() =>
  signOut({
    callbackUrl: "/",
  })
}
                className="w-full rounded-xl bg-red-500 py-3 text-white"
              >
                Sign Out
              </button>

            ) : (

              <>
                <Link
                  href="/auth/signin"
                  className="block rounded-xl border border-blue-600 py-3 text-center text-blue-600"
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/signup"
                  className="block rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-center text-white"
                >
                  Sign Up
                </Link>
              </>

            )}

          </div>

        </div>

      )}

    </header>
  )
}