import { Routes, Route } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'

import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/AppLayout/AppLayout'

import LandingPage from '@/features/landing/pages/LandingPage'

import { LoginPage, RegisterPage } from '@/features/auth'

import { DashboardPage } from '@/features/dashboard'

import WorkspaceList from '@/features/workspace/pages/WorkspaceList'
import CreateWorkspace from '@/features/workspace/pages/CreateWorkspace'

import WorkspaceGuard from '@/features/auth/components/WorkspaceGuard'

import NotFound from '@/features/not-found/NotFound'

export default function AppRouter () {
  return (
    <Routes>
      {/* ======================
            Public
      ======================= */}

      <Route path='/' element={<LandingPage />} />

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Route>

      {/* ======================
            Protected
      ======================= */}

      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<DashboardLayout />}>
          {/* ======================
                Workspace
                (No Guard)
          ======================= */}

          <Route path='workspace'>
            <Route index element={<WorkspaceList />} />
            <Route path='create' element={<CreateWorkspace />} />
          </Route>

          {/* ======================
                Guarded Routes
          ======================= */}

          <Route element={<WorkspaceGuard />}>
            <Route index element={<DashboardPage />} />

            {/* Residents */}
            {/* <Route
              path="residents"
              element={<ResidentsPage />}
            /> */}

            {/* Visitors */}
            {/* <Route
              path="visitors"
              element={<VisitorsPage />}
            /> */}

            {/* Complaints */}
            {/* <Route
              path="complaints"
              element={<ComplaintsPage />}
            /> */}

            {/* Maintenance */}
            {/* <Route
              path="maintenance"
              element={<MaintenancePage />}
            /> */}

            {/* Notices */}
            {/* <Route
              path="notices"
              element={<NoticesPage />}
            /> */}

            {/* Settings */}
            {/* <Route
              path="settings"
              element={<SettingsPage />}
            /> */}
          </Route>
        </Route>
      </Route>

      {/* ======================
            404
      ======================= */}

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
