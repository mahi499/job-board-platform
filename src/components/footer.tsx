'use client'

import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">JobBoard</h3>
            <p className="text-slate-400 text-sm">
              Find your dream job or hire top talent. A modern job board for the modern workforce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-slate-400 hover:text-white transition">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-slate-400 hover:text-white transition">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} JobBoard. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
