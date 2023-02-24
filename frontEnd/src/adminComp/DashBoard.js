import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabCCA from "./TabCCA";
import TabISITW from "./TabISITW";
import TabFBA from "./TabFBA";
import TabGCF from "./TabGCF";
import { useEffect, useState, useRef } from "react";
import TabCSTC from "./TabCSTC";
import TabMO from "./TabMO";
import "animate.css";
import UpperMenu from "../mainComp/UpperMenu";
import TabMCSTC from "./TabMCSTC";
import TabMCCA from "./TabMCCA";
import TabMISITW from "./TabMISITW";


const DashBoard = () => {
    const [admin, setAdmin] = useState("");
    const [LorM, setLorM] = useState("Les licences");
    const [lopen, setLopen] = useState(false);
    const [mopen, setMopen] = useState(false);
    const [arg, setArg] = useState(false); //i used this argument to call useEffect everytime on/off
    const lref = useRef(null);
    const mref = useRef(null);
    
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
        fetchData();
    }, [arg]);
    const logout = async () => {
        sessionStorage.setItem("token","");
        window.location.href = "/admin/signin";
    };
    const onoff = async () => {
        try {
            await fetch("http://localhost:3500/admin/open", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    LorM === "Les licences"
                        ? { licence: true }
                        : { licence: false }
                ),
            });
            setArg(!arg);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="bg">
            <UpperMenu />
            <div
                className="d-flex justify-content-between p-4"
                style={{ height: "28vh" }}
            >
                <div>
                    <button
                        className="switch activeLM"
                        onClick={() => {
                            setLorM("Les licences");
                            lref.current.className = "switch activeLM";
                            mref.current.className = "switch";
                        }}
                        ref={lref}
                    >
                        Licence
                    </button>
                    <br />
                    <br />
                    <button
                        className="switch"
                        onClick={() => {
                            setLorM("Les masters");
                            mref.current.className = "switch activeLM";
                            lref.current.className = "switch";
                        }}
                        ref={mref}
                    >
                        Master
                    </button>
                </div>
                <div>
                    <h1 className="title animate__bounceIn">{LorM}</h1>

                    {LorM === "Les licences" ? (
                        <button className="button" onClick={onoff}>
                            {lopen
                                ? "inscription ouverte"
                                : "inscription fermer"}
                        </button>
                    ) : (
                        <button className="button" onClick={onoff}>
                            {mopen
                                ? "inscription ouverte"
                                : "inscription fermer"}
                        </button>
                    )}
                </div>

                <div>
                    <h3>{admin}</h3>
                    <br />
                    <button className="logout" onClick={logout}>
                        Log Out
                    </button>
                </div>
            </div>

            {LorM === "Les licences" ? (
                <Tabs
                    defaultActiveKey="home"
                    justify
                    style={{ background: "transparent" }}
                >
                    <Tab eventKey="home" title="CSTC">
                        <div
                            className="p-3"
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Cyber Securite et Technologie Cloud</h3>
                            <TabCSTC />
                        </div>
                    </Tab>
                    <Tab eventKey="profile4" title="ISITW">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>
                                Ingenierie des Systemes Informatiques et
                                Technologies Web
                            </h3>
                            <TabISITW />
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="CCA">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Comptabilite, Controle et Audit</h3>
                            <TabCCA />
                        </div>
                    </Tab>
                    <Tab eventKey="profile2" title="FBA">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Finance, Banque et Assurance</h3>
                            <TabFBA />
                        </div>
                    </Tab>
                    <Tab eventKey="profile3" title="GCF">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Gestion Comptable et Financiere</h3>
                            <TabGCF />
                        </div>
                    </Tab>

                    <Tab eventKey="profile5" title="MO">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Management des Organizations</h3>
                            <TabMO />
                        </div>
                    </Tab>
                </Tabs>
            ) : (
                <Tabs
                    defaultActiveKey="home"
                    justify
                    style={{ background: "transparent" }}
                >
                    <Tab eventKey="home" title="MCSTC">
                        <div
                            className="p-3"
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Master Cyber Securite et Technologie Cloud</h3>
                            <TabMCSTC />
                        </div>
                    </Tab>
                    <Tab eventKey="profile4" title="MISITW">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>
                                Master Ingenierie des Systemes Informatiques et
                                Technologies Web
                            </h3>
                            <TabMISITW />
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="MCCA">
                        <div
                            className="p-3 "
                            style={{
                                overflowX: "auto",
                                background: "#fff",
                                color: "#000",
                                minHeight: "71.7vh",
                            }}
                        >
                            <h3>Comptabilite, Controle et Audit</h3>
                            <TabMCCA />
                        </div>
                    </Tab>
                </Tabs>
            )}
        </div>
    );
};

export default DashBoard;
