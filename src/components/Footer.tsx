const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">JobBoard</h3>
            <p className="text-slate-400 text-sm">Find your perfect job or hire top talent on our platform.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/jobs" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="/dashboard" className="hover:text-white">My Applications</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/employer/post" className="hover:text-white">Post Job</a></li>
              <li><a href="/employer/dashboard" className="hover:text-white">Manage Jobs</a></li>
              <li><a href="/employer/applications" className="hover:text-white">Applications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © 2024 JobBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
