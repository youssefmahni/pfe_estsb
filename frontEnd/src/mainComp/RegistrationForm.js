import { Link } from "react-router-dom";
import { useState } from "react";

const RegistrationForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const applicant = false;
  const applicationid = "";

  const registerUser = async (e) => {
    e.preventDefault();
    const responce = await fetch("http://localhost:3500/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fname,
            lname,
            email,
            password,
            applicant,
            applicationid,
        }),
    });
    const data = await responce.json();
    if (data.status === "ok") {
      window.location.href = "/signin";
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
            <h2 className="mb-4 p-3">Register with us</h2>
            <form className="d-flex flex-column" onSubmit={registerUser}>
              <div className="d-flex flex-column p-1">
                <label htmlFor="fname">FirstName *</label>
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
                <label htmlFor="lname">LastName *</label>
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
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  className="p-1 border"
                  required
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-danger">error email</p>
              </div>
              <div className="d-flex flex-column p-1">
                <label htmlFor="pw">PassWord *</label>
                <input
                  type="password"
                  value={password}
                  id="pw"
                  placeholder="aaAA11!@#$_-"
                  className="p-1 border"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-danger">error password</p>
              </div>
              <button type="submit" class="btn btn-primary mt-3">
                Register
              </button>
            </form>
            <p>
              These first and last names must match your official identification
              papers. You will receive an email to confirm your registration
            </p>
            <Link to={"/signin"} className="text-dark mt-4">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
