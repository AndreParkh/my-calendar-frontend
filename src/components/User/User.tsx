import { useState } from 'react'
import { UserInfoPage } from '../UserInfo/UserInfoPage.tsx'

export const User = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      {show ? (
        <UserInfoPage />
      ) : (
        <button onClick={() => setShow(true)}>
          Показать данные пользователя
        </button>
      )}
    </>
  )
}
