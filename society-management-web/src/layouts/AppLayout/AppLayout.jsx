import { Outlet } from "react-router-dom";
import { Navbar } from "../../shell";
import Sidebar from "../../shell/Sidebar/Sidebar";
import PageContainer from "../../ui/PageContainer/PageContainer";

export default function DashboardLayout () {
  return (
    <div className='flex h-screen bg-[var(--background)]'>
      <Sidebar />

      <div className='flex min-w-0 flex-1 flex-col'>
        <Navbar />

        <main className='flex-1 overflow-y-auto'>
          <PageContainer>
            {/* <Breadcrumb /> */}
            <Outlet />
          </PageContainer>
        </main>
      </div>
    </div>
  )
}
