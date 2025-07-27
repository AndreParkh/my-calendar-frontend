import { Outlet } from 'react-router'

export const ProtectedLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}
