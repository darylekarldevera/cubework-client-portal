import { Outlet } from 'react-router-dom'
import SidebarNavigation from '@/components/SidebarNavigation'

function MainLayout() {
  return (
    <div>
      <SidebarNavigation />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
