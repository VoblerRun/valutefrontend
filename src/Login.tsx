import React , { useState } from 'react';
import AuthService from "./AuthService";
import { Cookies } from 'react-cookie';
import {  useNavigate } from "react-router-dom";
import Home from "./Home";

function BootstrapHoverButtons() {
    const navigate = useNavigate();

    const cookies = new Cookies();
    const handleClick = (
        event: React.MouseEvent<HTMLElement>,
        authData: {email : string,
            password : string }
    ) => {
        const cookies = new Cookies();
        // console.log(cookies.get('token'));
        navigate("/home");
        const token = AuthService.login(authData.email, authData.password);
        console.log('token  1');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangeEmail = (event: { target: { value: any; }; }) => {
        console.log('event', event);
        setEmail(event.target.value);
    };

    const handleChangePassword = (event: { target: { value: any; }; }) => {
        console.log('event', event);
        setPassword(event.target.value);
    };




        return (

        <div className="container mt-2">
            <div className="d-grid gap-2">

                <label>
                    Email:
                    <input  type="text" name="email" value={email} onChange={handleChangeEmail} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChangePassword} />
                </label>
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={(evt) => {
                        handleClick(evt, {email, password});
                    }}
                >
                    Bootstrap Button
                </button>
            </div>
        </div>
    );
}
export default BootstrapHoverButtons;