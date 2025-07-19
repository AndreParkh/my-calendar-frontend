import { ILogin } from "../../components/Login/Login.interface.ts";

const login = async (data: ILogin) => await fetch('http://localhost/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})

export default login