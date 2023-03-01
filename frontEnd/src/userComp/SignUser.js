import React, { useState } from "react";
import Alert from "./Alert";
import NavBar from "../mainComp/NavBar";
import Footer from "../mainComp/Footer";
import UpperMenu from "../mainComp/UpperMenu";
import Copyright from "../mainComp/Copyright";

const SignUser = () => {
    const [cin1, setCin1] = useState("");
    const [code1, setCode1] = useState("");
    const [show, setShow] = useState(false);

    const poursuivre = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:3500/poursuivre", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cin: cin1,
                code: code1,
            }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            sessionStorage.setItem("token", data.accessToken);
            console.log(data.accessToken);
            window.location.href = `/poursuivre/${code1}`;
        } else {
            setShow(true);
        }
    };
    return (
        <div>
            <UpperMenu />
            <NavBar />
            <div className="container p-5">
                <div
                    className="row d-flex mt-3 m-1"
                    style={{ justifyContent: "center" }}
                >
                    <div
                        className="col-lg-5 mt-3 p-4 shadow"
                        style={{ background: "white" }}
                    >
                        <Alert show={show} setShow={setShow} />
                        <h2 className="mb-4 p-3 pb-0 ">s'authentifier ici</h2>
                        <form
                            className="d-flex flex-column"
                            onSubmit={poursuivre}
                        >
                            <div className="d-flex flex-column p-3">
                                <div class="group">
                                    <input
                                        type="text"
                                        required
                                        value={cin1}
                                        onChange={(e) => {
                                            setCin1(e.target.value);
                                            setShow(false);
                                        }}
                                        autoComplete="off"
                                        class="input"
                                    />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label className="label">Cin</label>
                                </div>
                            </div>
                            <div className="d-flex flex-column p-3">
                                <div class="group">
                                    <input
                                        type="text"
                                        required
                                        value={code1}
                                        onChange={(e) => {
                                            setCode1(e.target.value);
                                            setShow(false);
                                        }}
                                        autoComplete="off"
                                        class="input"
                                    />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label className="label">
                                        Code condidature
                                    </label>
                                </div>
                            </div>
                            <br />
                            <button type="submit" class="btn btn-primary mt-3">
                                acceder
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
            <Copyright />
        </div>
    );
};

export default SignUser;
