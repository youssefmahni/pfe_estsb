import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Lone from "./Lone";
import Ltwo from "./Ltwo";
import Mone from "./Mone";
import Mtwo from "./Mtwo";
import { useEffect, useState } from "react";

const DashBoard = () => {
    const [admin, setAdmin] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch(
                    "http://localhost:3500/admin/dashboard",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${sessionStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                );
                const data = await responce.json();
                setAdmin(`${data.response.lname} ${data.response.fname}`);
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, []);
    return (
        <div className="container">
            <h1>DashBoard</h1>
            <h1>hello {admin}</h1>
            <br />
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
                style={{ background: "transparent" }}
            >
                <Tab eventKey="profile" title="Licences one">
                    <div className="p-5 ">
                        <h3>Licences one</h3>
                        <Lone />
                    </div>
                </Tab>
                <Tab eventKey="home" title="Licences two">
                    <div className="p-5 ">
                        <h3>Licences two</h3>
                        <Ltwo />
                    </div>
                </Tab>

                <Tab eventKey="profile2" title="Master one">
                    <div className="p-5 ">
                        <h3>Master one</h3>
                        <Mone />
                    </div>
                </Tab>
                <Tab eventKey="profile3" title="Master two">
                    <div className="p-5 ">
                        <h3>Master two</h3>
                        <Mtwo />
                    </div>
                </Tab>
            </Tabs>
            <br />
        </div>
    );
};

export default DashBoard;
