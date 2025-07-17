import './UserInfo.css'
import { Suspense } from "react";
import UserInfo from "./UserInfo.tsx";
import {fetchUser} from "../../api/public/fetchUser.ts";

function UserInfoPage() {
    const userPromise = fetchUser()
    return (
        <div className='user'>
            <h1>Данные пользователя</h1>
            <Suspense fallback={<p>Loading card component...</p>}>
                <UserInfo userPromise={userPromise}/>
            </Suspense>
        </div>
    )
}

export default UserInfoPage
