import {
  LayoutDashboard,
  Users,
  UserRound,
  Bell,
  Wrench,
  CreditCard,
  Settings
} from 'lucide-react'

const items = [
  ['Dashboard', LayoutDashboard],
  ['Members', Users],
  ['Visitors', UserRound],
  ['Notices', Bell],
  ['Maintenance', Wrench],
  ['Billing', CreditCard],
  ['Settings', Settings]
]

export default function PreviewSidebar () {
  return (
    <aside className='border-r border-[var(--border)] bg-[var(--background)] p-6'>
      <h3 className='mb-10 text-2xl font-bold'>Portl</h3>

      <nav className='space-y-2'>
        {items.map(([title, Icon], index) => (
          <div
            key={title}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
              index === 0 ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-secondary)]'
            }`}
          >
            <Icon size={18} />

            {title}
          </div>
        ))}
      </nav>
    </aside>
  )
}
