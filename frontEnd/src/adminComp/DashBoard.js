import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabCCA from "./TabCCA";
import TabISITW from "./TabISITW";
import TabFBA from "./TabFBA";
import TabGCF from "./TabGCF";
import { useEffect, useState } from "react";
import Copyright from '../mainComp/Copyright';
import TabCSTC from "./TabCSTC";
import TabMO from "./TabMO";

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
        <div>
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
                <Tab eventKey="profile" title="CCA">
                    <div className="p-3">
                        <h3>Comptabilite, Controle et Audit</h3>
                        <TabCCA />
                    </div>
                </Tab>
                <Tab eventKey="home" title="CSTC">
                    <div className="p-3 ">
                        <h3>Cyber Securite et Technologie Cloud</h3>
                        <TabCSTC />
                    </div>
                </Tab>

                <Tab eventKey="profile2" title="FBA">
                    <div className="p-3 ">
                        <h3>Finance, Banque et Assurance</h3>
                        <TabFBA />
                    </div>
                </Tab>
                <Tab eventKey="profile3" title="GCF">
                    <div className="p-3 ">
                        <h3>Gestion Comptable et Financiere</h3>
                        <TabGCF />
                    </div>
                </Tab>
                <Tab eventKey="profile4" title="ISITW">
                    <div className="p-3 ">
                        <h3>ISITW</h3>
                        <TabISITW />
                    </div>
                </Tab>
                <Tab eventKey="profile5" title="MO">
                    <div className="p-3 ">
                        <h3>management des organizations</h3>
                        <TabMO />
                    </div>
                </Tab>
            </Tabs>
            <br />
            <div className="bottom">
                <Copyright />
            </div>
        </div>
    );
};

export default DashBoard;
