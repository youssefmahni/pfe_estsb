import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Alert from "../mainComp/Alert";

const SignInForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const [wrong, setWrong] = useState(false);
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
                setWrong(true);
                setShow(true);
            }
        } catch (error) {
            console.log("something went wrong check signAdmin", error);
        }
    };
    return (
        <div>
            <div className="container">
                <div
                    className="row d-flex mt-3 m-1"
                    style={{ justifyContent: "center" }}
                >
                    <div
                        className="col-lg-5 border mt-3 p-4 rounded"
                        style={{ background: "white" }}
                    >
                        <h2 className="mb-4 p-3">Admins Area</h2>
                        <form
                            className="d-flex flex-column"
                            onSubmit={loginUser}
                        >
                            <div className="d-flex flex-column p-1">
                                <label htmlFor="fname">First name</label>
                                <input
                                    type="text"
                                    value={fname}
                                    id="fname"
                                    className="p-1 border"
                                    required
                                    autoComplete="off"
                                    onChange={(e) => setFname(e.target.value)}
                                />
                                <p className="text-danger">error first name</p>
                            </div>
                            <div className="d-flex flex-column p-1">
                                <label htmlFor="lname">Last name</label>
                                <input
                                    type="text"
                                    value={lname}
                                    id="lname"
                                    className="p-1 border"
                                    required
                                    autoComplete="off"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                                <p className="text-danger">error last name</p>
                            </div>
                            <div className="d-flex flex-column p-1">
                                <label htmlFor="pw">PassWord</label>
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
                                <p className="text-danger">error password</p>
                            </div>

                            <button type="submit" class="btn btn-primary mt-3">
                                Start
                            </button>
                        </form>

                        <Link to={"/signin"} className="text-dark mt-4">
                            back to normal
                        </Link>
                    </div>
                </div>
            </div>
            {{ wrong } ? <Alert show={show} setShow={setShow} /> : null}
        </div>
    );
};

export default SignInForm;
