import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabCCA from "./TabCCA";
import TabISITW from "./TabISITW";
import TabFBA from "./TabFBA";
import TabGCF from "./TabGCF";
import { useEffect, useState } from "react";
import Copyright from "../mainComp/Copyright";
import TabCSTC from "./TabCSTC";
import TabMO from "./TabMO";
import "animate.css";
import UpperMenu from "../mainComp/UpperMenu";

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
    const logout = async () => {
        sessionStorage.setItem("token","");
        window.location.href = "/admin/signin";
    };
    return (
        <div className="bg">
            <UpperMenu />
            <div
                className="d-flex justify-content-between p-4"
                style={{ height: "20vh" }}
            >
                <h3>{admin}</h3>
                <h1
                    className="title animate__bounceIn"
                >
                    Les licences
                </h1>

                <button className="logout" onClick={logout}>
                    Log Out
                </button>
            </div>

            <br />
            <Tabs
                defaultActiveKey="profile"
                // id="uncontrolled-tab-exampl"
                justify
                style={{ background: "transparent" }}
            >
                <Tab eventKey="profile" title="CCA" style={{ color: "#fff" }}>
                    <div
                        className="p-3 "
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>Comptabilite, Controle et Audit</h3>
                        <TabCCA />
                    </div>
                </Tab>
                <Tab eventKey="home" title="CSTC">
                    <div
                        className="p-3"
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>Cyber Securite et Technologie Cloud</h3>
                        <TabCSTC />
                    </div>
                </Tab>
                <Tab eventKey="profile2" title="FBA">
                    <div
                        className="p-3 "
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>Finance, Banque et Assurance</h3>
                        <TabFBA />
                    </div>
                </Tab>
                <Tab eventKey="profile3" title="GCF">
                    <div
                        className="p-3 "
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>Gestion Comptable et Financiere</h3>
                        <TabGCF />
                    </div>
                </Tab>
                <Tab eventKey="profile4" title="ISITW">
                    <div
                        className="p-3 "
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>
                            Ingenierie des Systemes Informatiques et
                            Technologies Web
                        </h3>
                        <TabISITW />
                    </div>
                </Tab>
                <Tab eventKey="profile5" title="MO">
                    <div
                        className="p-3 "
                        style={{ overflowX: "auto", background: "#fff" }}
                    >
                        <h3>Management des Organizations</h3>
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