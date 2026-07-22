const activities = [
  'John added a visitor',
  'Maintenance bill generated',
  'Complaint marked as resolved',
  'Notice published'
]

export default function PreviewActivity () {
  return (
    <div className='rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6'>
      <h3 className='mb-6 text-xl font-semibold'>Recent Activity</h3>

      <div className='space-y-5'>
        {activities.map(item => (
          <div key={item} className='flex items-center gap-4'>
            <div className='h-3 w-3 rounded-full bg-[var(--primary)]' />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
