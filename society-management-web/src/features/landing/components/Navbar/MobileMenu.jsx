import { NavLink } from 'react-router-dom'
import { Button } from '@/ui'

export default function MobileMenu ({ open, links, onClose }) {
  if (!open) return null

  return (
    <div className='border-t border-[var(--border)] bg-[var(--card)] md:hidden'>
      <div className='flex flex-col px-6 py-5'>
        {links.map(item => (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className='py-3 text-[var(--text)]'
          >
            {item.label}
          </a>
        ))}

        <div className='mt-6 flex flex-col gap-3'>
          <NavLink to='/login'>
            <Button variant='ghost' className='w-full'>
              Login
            </Button>
          </NavLink>

          <NavLink to='/register'>
            <Button className='w-full'>Get Started</Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
