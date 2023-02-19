import React from 'react'
import Header from "../userComp/Header";
import Body from "../userComp/Body";
import Copyright from "../mainComp/Copyright";

const Application = () => {

    return (
        <div >
            <Header />
            <Body />
            <Copyright className="bottom" />
        </div>
    );
}

export default Application