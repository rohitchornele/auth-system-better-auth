import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Building2,
  Users,
  UserRound,
  Bell,
  Wrench,
  CreditCard,
  Settings
} from 'lucide-react'

const menu = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    name: 'Society',
    icon: Building2,
    path: '/society'
  },
  {
    name: 'Members',
    icon: Users,
    path: '/members'
  },
  {
    name: 'Visitors',
    icon: UserRound,
    path: '/visitors'
  },
  {
    name: 'Notices',
    icon: Bell,
    path: '/notices'
  },
  {
    name: 'Maintenance',
    icon: Wrench,
    path: '/maintenance'
  },
  {
    name: 'Billing',
    icon: CreditCard,
    path: '/billing'
  },
  {
    name: 'Settings',
    icon: Settings,
    path: '/settings'
  }
]

export default function Sidebar () {
  return (
    <aside className='flex w-64 flex-col border-r border-(--border) bg-(--card)'>
      <div className='border-b border-(--border) p-6'>
        <h1 className='text-2xl font-bold'>Portl</h1>
      </div>

      <nav className='flex-1 space-y-1 p-3'>
        {menu.map(item => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
