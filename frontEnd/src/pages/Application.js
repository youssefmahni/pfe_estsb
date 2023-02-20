import React from 'react'
import Header from "../userComp/Header";
import Body from "../userComp/Body";
import Copyright from "../mainComp/Copyright";
import UpperMenu from '../mainComp/UpperMenu'

const Application = () => {

    return (
        <div >
            <UpperMenu/>
            <Header />
            <Body />
            <Copyright className="bottom" />
        </div>
    );
}

export default Application