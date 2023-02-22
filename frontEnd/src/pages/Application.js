import React, { useEffect, useState } from "react";
import Header from "../userComp/Header";
import Body from "../userComp/Body";
import Copyright from "../mainComp/Copyright";
import UpperMenu from "../mainComp/UpperMenu";

const Application = () => {
    const [lopen, setLopen] = useState(false);
    const [mopen, setMopen] = useState(false);
    useEffect(() => {
        const isOpen = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3500/admin/checklorm"
                );
                const data = await response.json();
                setLopen(data.response.licence);
                setMopen(data.response.master);
            } catch (error) {
                console.log(error);
            }
        };
        isOpen();
    });
    return (
        <div>
            <UpperMenu />
            <Header />
            {(lopen && sessionStorage.getItem("licence") !== "null") ||
            (mopen && sessionStorage.getItem("master") !== "null") ? (
                <Body />
            ) : (
                <h1 style={{ minHeight: "72.2vh", textAlign: "center" }}>
                    inscription ferme !
                </h1>
            )}

            <Copyright className="bottom" />
        </div>
    );
};

export default Application;
