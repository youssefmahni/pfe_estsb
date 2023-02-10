import { useState , useRef } from "react";

const FormL = ({ email, setApplicant, setSecond }) => {
    const fileInput = useRef(null);
    const [cne, setCne] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [sex, setSex] = useState("man");
    const [age, setAge] = useState("2001-01-01");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("casa");
    const [codepostal, setCodepostal] = useState("");
    const [licence, setLicence] = useState("licence one one");
    const master = null;
    const [diplom, setDiplom] = useState("");

    const applyLicence = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("diplom", fileInput.current.files[0]);
        await fetch("http://localhost:3500/upload", {
            method: "POST",
            body: formData,
        });
        const responce = await fetch("http://localhost:3500/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cne,
                fname,
                lname,
                sex,
                age,
                phone,
                city,
                codepostal,
                licence,
                master,
                diplom,
            }),
        });
        const resID = await fetch("http://localhost:3500/getid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cne: cne }),
        });
        const ID = await resID.json();
        await fetch("http://localhost:3500/saveapp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, _id: ID.response._id }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            console.log(data.message);
            setApplicant(true);
            setSecond(false);
        }
    };
    return (
        <div className="m-5 mt-0">
            <h1>Licence Application Form</h1>
            <form className="row g-3" onSubmit={applyLicence}>
                {/* first name */}
                <div className="col-md-4">
                    <label for="fname" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="fname"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* last name */}
                <div className="col-md-4">
                    <label for="lname" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="lname"
                        value={lname}
                        required
                        onChange={(e) => setLname(e.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* sex */}
                <div className="col-md-4">
                    <label className="form-label">Sex</label>
                    <div className=" form-control is-valid">
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                id="man"
                                name="sex"
                                value={sex}
                                onClick={(e) => setSex("man")}
                                checked
                            />
                            <label class="form-check-label" for="man">
                                man
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="sex"
                                id="woman"
                                value={sex}
                                onClick={(e) => setSex("woman")}
                            />
                            <label class="form-check-label" for="woman">
                                woman
                            </label>
                        </div>
                    </div>
                </div>
                {/* age */}
                <div className="col-md-4">
                    <label for="age" className="form-label">
                        Age
                    </label>
                    <input
                        type="date"
                        className="form-control is-valid"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* phone */}
                <div className="col-md-8">
                    <label for="phone" className="form-label">
                        Phone Number
                    </label>
                    <div class="input-group">
                        <span class="input-group-text">+212</span>
                        <input
                            type="text"
                            class="form-control is-valid"
                            placeholder="Recipient's phone number"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <div className="valid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                </div>
                {/* city */}
                <div className="col-md-8">
                    <label for="city" className="form-label">
                        City
                    </label>
                    <div class="input-group">
                        <span class="input-group-text">Morocco /</span>
                        <select
                            class="form-select is-valid"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="casa">casa</option>
                            <option value="rabat">rabat</option>
                            <option value="tanger">tanger</option>
                        </select>
                    </div>
                </div>
                {/* code postal */}
                <div className="col-md-4">
                    <label for="codepostal" className="form-label">
                        Code postal
                    </label>
                    <input
                        type="text"
                        className="form-control is-invalid"
                        id="codepostal"
                        value={codepostal}
                        onChange={(e) => setCodepostal(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                {/* cne */}
                <div className="col-md-4">
                    <label for="cne" className="form-label">
                        CNE
                    </label>
                    <input
                        type="text"
                        className="form-control is-invalid"
                        id="cne"
                        value={cne}
                        onChange={(e) => setCne(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                {/* licence title */}
                <div className="col-md-8">
                    <label for="choice" className="form-label">
                        Licence title
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="choice"
                            value={licence}
                            onChange={(e) => setLicence(e.target.value)}
                        >
                            <option selected value="licence one one">
                                licence one one
                            </option>
                            <option value="licence two two">
                                licence two two
                            </option>
                        </select>
                    </div>
                </div>
                {/* diplom */}
                <div className="col-md-6">
                    <label for="image" class="form-label">
                        diplom
                    </label>
                    <input
                        class="form-control is-valid"
                        type="file"
                        id="image"
                        name="diplom"
                        value={diplom}
                        onChange={(e) => setDiplom(e.target.value)}
                        ref={fileInput}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormL;
