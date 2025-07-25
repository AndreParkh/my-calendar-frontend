import './UserInfo.css'
import { Suspense } from 'react'
import { fetchUser } from '@/api/public/fetchUser.ts'
import { UserInfo } from '@/components'

export const UserInfoPage = () => {
  const userPromise = fetchUser()
  return (
    <div className="user">
      <h1>Данные пользователя</h1>
      <Suspense fallback={<p>Loading card component...</p>}>
        <UserInfo userPromise={userPromise} />
      </Suspense>
    </div>
  )
}
