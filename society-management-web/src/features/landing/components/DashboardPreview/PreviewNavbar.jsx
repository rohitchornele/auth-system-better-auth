import { Search, Bell } from 'lucide-react'

export default function PreviewNavbar () {
  return (
    <header className='flex items-center justify-between border-b border-[var(--border)] px-8 py-5'>
      <div className='flex items-center gap-3 rounded-xl border border-[var(--border)] px-4 py-2'>
        <Search size={18} />

        <span className='text-sm text-[var(--text-secondary)]'>Search...</span>
      </div>

      <div className='flex items-center gap-4'>
        <Bell />

        <div className='h-10 w-10 rounded-full bg-blue-500' />
      </div>
    </header>
  )
}
