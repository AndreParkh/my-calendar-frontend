import {StrictMode, useState} from "react";
import UserInfoPage from "../UserInfo/UserInfoPage.tsx";

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <StrictMode>
            {show
                ? <UserInfoPage />
                : (<button onClick={() => setShow(true)}>
                    Показать данные пользователя
                </button>)
            }
        </StrictMode>
    );
}
