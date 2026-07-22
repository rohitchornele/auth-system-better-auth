import { Outlet } from 'react-router-dom'
import { Sidebar, Navbar } from '../shell'

export default function DashboardLayout () {
  return (
    <div className='flex h-screen overflow-hidden bg-(--card)'>
      <Sidebar />

      <div className='flex flex-1 flex-col overflow-hidden'>
        <Navbar />

        <main className='flex-1 overflow-y-auto p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
