import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormL from "./FormL";
import FormM from "./FormM";

function Options({ email, applicant, setApplicant }) {
    return (
        <div className="container">
            <div className="row justify-content-center m-2  ">
                <div
                    className="col p-0 rounded "
                    style={{
                        background: "white",
                        boxShadow: "0 15px 16.83px 0.17px rgba(0, 0, 0, .1)",
                    }}
                >
                    {!applicant ? (
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            justify
                            style={{ background: "transparent" }}
                        >
                            <Tab eventKey="home" title="Licences Fondamentales">
                                <div>
                                    <FormL
                                        email={email}
                                        setApplicant={setApplicant}
                                    />
                                </div>
                            </Tab>
                            <Tab
                                eventKey="profile"
                                title="Licences Professionnelles"
                            >
                                <div>
                                    <FormM
                                        email={email}
                                        setApplicant={setApplicant}
                                    />
                                </div>
                            </Tab>
                        </Tabs>
                    ) : (
                        <p>submited successfully</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Options;
