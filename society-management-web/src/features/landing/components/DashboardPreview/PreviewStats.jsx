const stats = [
  ['Residents', '1,240'],
  ['Visitors', '84'],
  ['Revenue', '₹3.4L'],
  ['Complaints', '12']
]

export default function PreviewStats () {
  return (
    <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
      {stats.map(([title, value]) => (
        <div
          key={title}
          className='rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6'
        >
          <p className='text-sm text-[var(--text-secondary)]'>{title}</p>

          <h3 className='mt-3 text-3xl font-bold'>{value}</h3>
        </div>
      ))}
    </div>
  )
}
