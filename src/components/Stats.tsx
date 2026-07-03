const Stats = () => {
  const stats = [
    { label: 'Active Jobs', value: '1,250+' },
    { label: 'Companies', value: '500+' },
    { label: 'Job Seekers', value: '50,000+' },
    { label: 'Placements', value: '10,000+' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
