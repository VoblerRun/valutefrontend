import axios from "axios";
import { Cookies } from 'react-cookie';
const API_URL = "http://localhost:8080/api/authenticate";


class AuthService {
    
    
   login(email: string, password: string) {
        return axios
            .post(API_URL, {
                email,
                password
            })
            .then(response => {
                // if (response.data.accessToken) {
                //     localStorage.setItem("user", JSON.stringify(response.data));
                // }
                // console.log('response', response.data.token);

                const cookies = new Cookies();
                console.log('response.data.token' , response.data.token);
                cookies.set('Bearer Token', response.data.token, {httpOnly: true, secure: true});

                console.log('cookir', cookies.get('token'));
            });

    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();