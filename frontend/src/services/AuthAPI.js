import { ClientAPI } from "./ClientAPI";

export class AuthAPI {

    static async signIn(email, password) {
        const authData = {
            "email": email,
            "password": password
        }
        return await ClientAPI.post(`${process.env.REACT_APP_API_URL}/auth/login`, authData)
            .then(response => response.data)
    }
}