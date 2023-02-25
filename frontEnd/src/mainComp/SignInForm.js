// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// // import Alert from "./Alert";


// const SignInForm = () => {  
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [wrong, setWrong] = useState(false);
//     const [show, setShow] = useState(false);

//     const loginUser = async (e) => {
//         e.preventDefault();
//         const responce = await fetch("http://localhost:3500/signin", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email, password }),
//         });
//         const data = await responce.json();
//         if (data.accessToken) {
//             sessionStorage.setItem("token", data.accessToken);
//             window.location.href = "/personal" ;
//         } else {
//             setWrong(true);
//             setShow(true);
//             console.log(wrong);
//         }
//     };
//     return (
//         <div>
//             <div className="container">
//                 <div
//                     className="row d-flex mt-3 m-1"
//                     style={{ justifyContent: "center" }}
//                 >
//                     <div
//                         className="col-lg-5 border mt-3 p-4 rounded"
//                         style={{ background: "white" }}
//                     >
//                         <h2 className="mb-4 p-3">Sign In</h2>
//                         <form
//                             className="d-flex flex-column"
//                             onSubmit={loginUser}
//                         >
//                             <div className="d-flex flex-column p-1">
//                                 <label htmlFor="email">Email address</label>
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     id="email"
//                                     className="p-1 border"
//                                     required
//                                     autoComplete="off"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <p className="text-danger">error email</p>
//                             </div>
//                             <div className="d-flex flex-column p-1">
//                                 <label htmlFor="pw">PassWord</label>
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     id="pw"
//                                     placeholder="aaAA11!@#$_-"
//                                     className="p-1 border"
//                                     required
//                                     onChange={(e) =>
//                                         setPassword(e.target.value)
//                                     }
//                                 />
//                                 <p className="text-danger">error password</p>
//                             </div>

//                             <button type="submit" class="btn btn-primary mt-3">
//                                 Start
//                             </button>
//                         </form>
//                         <p>
//                             These first and last names must match your official
//                             identification papers. You will receive an email to
//                             confirm your registration
//                         </p>
//                         <Link to={"/register"} className="text-dark mt-4">
//                             Register
//                         </Link>
//                         <br/>
//                         <Link to={"/admin/signin"} className="text-dark mt-4">
//                             other login 
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             {/* {{ wrong } ? <Alert show={show} setShow={setShow} /> : null} */}
//         </div>
//     );
// };

// export default SignInForm;
