import { Routes, Route } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import AuthLayout from '../layouts/AuthLayout'
import { LoginPage, RegisterPage } from '../features/auth'
import DashboardLayout from '../layouts/DashboardLayout'
import { DashboardPage } from '../features/dashboard'
import NotFound from '../features/not-found/NotFound'
import LandingPage from '../features/landing/pages/LandingPage'



export default function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
