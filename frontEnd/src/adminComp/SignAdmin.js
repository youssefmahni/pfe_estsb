import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import NavBar from "../mainComp/NavBar";
import Footer from "../mainComp/Footer";
import UpperMenu from "../mainComp/UpperMenu";
import Copyright from "../mainComp/Copyright";

const SignInForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const loginUser = async (e) => {
        try {
            e.preventDefault();
            const responce = await fetch("http://localhost:3500/admin/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fname, lname, password }),
            });
            const data = await responce.json();
            if (data.status === "ok") {
                sessionStorage.setItem("token", data.accessToken);
                window.location.href = "/admin/dashboard";
            } else {
                setShow(true);
            }
        } catch (error) {
            console.log("something went wrong check signAdmin", error);
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
                        <h2 className="mb-4 p-3 pb-0 ">ZONE ADMINS</h2>
                        <form
                            className="d-flex flex-column"
                            onSubmit={loginUser}
                        >
                            <div className="d-flex flex-column p-3">
                                <div class="group">
                                    <input
                                        type="text"
                                        value={fname}
                                        id="fname"
                                        required
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setFname(e.target.value)
                                        }
                                        class="input"
                                    />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label className="label">Prenom</label>
                                </div>
                            </div>
                            <div className="d-flex flex-column p-3">
                                <div class="group">
                                    <input
                                        type="text"
                                        value={lname}
                                        id="fname"
                                        required
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setLname(e.target.value)
                                        }
                                        class="input"
                                    />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label className="label">Nom</label>
                                </div>
                            </div>
                            <div className="d-flex flex-column p-3">
                                <div class="group">
                                    <input
                                        type="password"
                                        value={password}
                                        id="fname"
                                        required
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        class="input"
                                    />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label className="label">Password</label>
                                </div>
                            </div>

                            {/* <div className="d-flex flex-column p-2">
                                <label htmlFor="pw">Mot de passe</label>
                                <input
                                    type="password"
                                    value={password}
                                    id="pw"
                                    placeholder="aaAA11!@#$_-"
                                    className="p-1 border"
                                    required
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div> */}

                            <button type="submit" class="btn btn-primary mt-3">
                                Entrer
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

export default SignInForm;
