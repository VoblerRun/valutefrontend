import React from "react";
import AuthService from "./AuthService";

const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    printValue: string
) => {
    const token = AuthService.login('testy@mail.ru', '3219652');
    //event.persist();
    // console.log('token:  ' ,token);
    console.log(printValue);
};

export default function BootstrapHoverButtons() {
    return (
        <div className="container mt-2">
            <div className="d-grid gap-2">
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={(evt) => {
                        handleClick(evt, "My Prop");
                    }}
                >
                    Bootstrap Button
                </button>
            </div>
        </div>
    );
}