import { Link, Outlet } from "react-router";


export default function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Логин</Link>
                    </li>
                    <li>
                        <Link to="/register">Регистрация</Link>
                    </li>
                    <li>
                        <Link to="/app">App</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}