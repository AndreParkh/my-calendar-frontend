import {Suspense} from "react";
import UserInfo from '../UserInfo/UserInfo.tsx'
export default function App() {
    return (
        <Suspense fallback={<p>Loading card component...</p>}>
            <UserInfo />
        </Suspense>
    )
}
