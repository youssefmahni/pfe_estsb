import React from "react";
import {Link} from 'react-router-dom';

// const logout = async () => {
//     try {
//         sessionStorage.setItem("token","");
//         await fetch("http://localhost:3500/logout", {
//             method: "GET",
//             headers: { "Content-Type": "application/json" },
//         });
//         window.location.href = "/signin";
//     } catch (error) {
//         console.log(error.message);
//     }
    
// };
const Header = () => {
    return (
        <div className="container d-flex justify-content-center p-4">
            <Link to={"/"}>
                <img
                    src="http://localhost:3500/media/logo.jpg"
                    alt="logo ecole"
                    style={{ height: "auto", maxWidth: "20rem" }}
                />
            </Link>
            {/* <button onClick={logout}>LOG OUT</button> */}
        </div>
    );
};

export default Header;
