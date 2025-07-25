import {RouteObject} from "react-router-dom";
import Layout from "./components/Loyout/Layout.tsx";
import Register from "./components/Register/Register.tsx";
import Login from "./components/Login/Login.tsx";
import App from "./components/App/App.tsx";
import Catchall from "./components/Catchall.tsx";
import Error from "./components/App/Error.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, element: <h1>Home</h1> },
            { path: 'register', Component: Register },
            { path: 'login', Component: Login },
            { path: 'app', Component: App, errorElement: <Error /> }
        ]
    },
    {
        path: "*?",
        Component: Catchall,
    }
]

export { routes }