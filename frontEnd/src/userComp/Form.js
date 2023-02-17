import { useState, useRef } from "react";
import BacSeries from "./BacSeries";
import MentionBac from "./MentionBac";
import Nationalities from "./Nationalities";
import Diploms from "./Diploms";
import Specialities from "./Specialities";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Form = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        // e.preventDefault();
        // const responce = await fetch("http://localhost:3500/check", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         cin,
        //     }),
        // });
        // const data = await responce.json();
        // if (data.status === "ok") {
        //     localStorage.setItem("old", false);
        // } else {
        //     localStorage.setItem("old", true);

        // }
        setShow(true);
    };

    const fileInput = useRef(null);
    const [cin, setCin] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [sex, setSex] = useState("");
    const [datenaissance, setDatenaissance] = useState("");
    const [phone, setPhone] = useState("");
    const [ville, setVille] = useState("");
    const [nationalite, setNationalite] = useState("");
    const [profile, setProfile] = useState("");
    const [seriebac, setSeriebac] = useState("");
    const [anneebac, setAnneebac] = useState("");
    const [mentionbac, setMentionbac] = useState("");
    const [dernierdiplom, setDernierdiplom] = useState("");
    const [anneediplom, setAnneediplom] = useState("");
    const [specialitediplom, setSpecialitediplom] = useState("");
    const [etablissement, setEtablissement] = useState("");
    const [email, setEmail] = useState("");

    const apply = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profile", fileInput.current.files[0]);
        await fetch("http://localhost:3500/upload", {
            method: "POST",
            body: formData,
        });
        const responce = await fetch("http://localhost:3500/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cin,
                nom,
                prenom,
                sex,
                datenaissance,
                phone: "212 " + phone,
                ville,
                anneebac,
                licence: sessionStorage.getItem("licence"),
                master: sessionStorage.getItem("master"),
                profile,
                nationalite,
                seriebac,
                mentionbac,
                dernierdiplom,
                anneediplom,
                specialitediplom,
                etablissement,
                email,
                code: "000",
            }),
        });

        const data = await responce.json();
        if (data.status === "ok") {
            localStorage.setItem("cin", cin);
            window.location.href = "/personal";
        } 
    };

    return (
        <div className=" border p-4 bg-light rounded">
            <form className="row g-3" onSubmit={handleShow}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <img
                                src="http://localhost:3500/media/profile.png"
                                alt="profile"
                            />
                            {/* profile */}
                            <div className="col-md-10">
                                <label for="image" class="form-label">
                                    Photo d'identite
                                </label>
                                <input
                                    class="form-control is-valid"
                                    type="file"
                                    id="image"
                                    name="profile"
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                    ref={fileInput}
                                />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border p-2 rounded">
                                <p>
                                    Pour modifier votre dossier de
                                    préinscription, veuillez saisir votre numéro
                                    de CIN ainsi que votre code d’accès reçu par
                                    mail.
                                </p>
                                <form>
                                    <input
                                        className="m-1"
                                        type="text"
                                        placeholder="votre cin"
                                    />
                                    <input
                                        className="m-1"
                                        type="text"
                                        placeholder="votre code d'acces"
                                    />
                                    <button
                                        className="m-1 ps-1 pe-1 rounded"
                                        type="submit"
                                    >
                                        acceder
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* prenom */}
                <div className="col-md-4">
                    <label for="fname" className="form-label">
                        Prenom
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="fname"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* nom */}
                <div className="col-md-4">
                    <label for="lname" className="form-label">
                        Nom
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="lname"
                        value={nom}
                        required
                        onChange={(e) => setNom(e.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* sex */}
                <div className="col-md-4">
                    <label for="sex" className="form-label">
                        Sex
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="sex"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <option value={""}>---</option>

                            <option selected value="homme">
                                homme
                            </option>
                            <option value="femme">femme</option>
                        </select>
                    </div>
                </div>
                {/* datenaissance */}
                <div className="col-md-4">
                    <label for="age" className="form-label">
                        Date de naissance
                    </label>
                    <input
                        type="date"
                        className="form-control is-valid"
                        id="age"
                        value={datenaissance}
                        onChange={(e) => setDatenaissance(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* ville */}
                <div className="col-md-4">
                    <label for="ville" className="form-label">
                        Lieu de naissance
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="ville"
                        value={ville}
                        required
                        onChange={(e) => setVille(e.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* Nationalite */}
                <div className="col-md-4">
                    <label for="natio" className="form-label">
                        Nationalite
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="natio"
                            value={nationalite}
                            onChange={(e) => setNationalite(e.target.value)}
                        >
                            <option value={""}>---</option>
                            <Nationalities />
                        </select>
                    </div>
                </div>
                {/* phone */}
                <div className="col-md-7">
                    <label for="phone" className="form-label">
                        Téléphone portable
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
                {/* cin */}
                <div className="col-md-5">
                    <label for="cne" className="form-label">
                        CIN
                    </label>
                    <input
                        type="text"
                        className="form-control is-invalid"
                        id="cne"
                        value={cin}
                        onChange={(e) => setCin(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
                {/* serie bac */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        serie bac
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="choice"
                            value={seriebac}
                            onChange={(e) => setSeriebac(e.target.value)}
                        >
                            <BacSeries />
                        </select>
                    </div>
                </div>
                {/* annee bac */}
                <div className="col-md-4">
                    <label for="anneebac" className="form-label">
                        Annee Bac
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="anneebac"
                        value={anneebac}
                        onChange={(e) => setAnneebac(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* mention bac */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        Mention bac
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="choice"
                            value={mentionbac}
                            onChange={(e) => setMentionbac(e.target.value)}
                        >
                            <MentionBac />
                        </select>
                    </div>
                </div>
                {/* dernier diplom */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        Dernier diplom
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="choice"
                            value={dernierdiplom}
                            onChange={(e) => setDernierdiplom(e.target.value)}
                        >
                            <Diploms />
                        </select>
                    </div>
                </div>
                {/* annee diplom */}
                <div className="col-md-4">
                    <label for="anneedip" className="form-label">
                        Annee Dernier Diplom
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="anneedip"
                        value={anneediplom}
                        onChange={(e) => setAnneediplom(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* specialite */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        Specialite du dernier diplom
                    </label>
                    <div>
                        <select
                            class="form-select is-valid"
                            id="choice"
                            value={specialitediplom}
                            onChange={(e) =>
                                setSpecialitediplom(e.target.value)
                            }
                        >
                            <Specialities />
                        </select>
                    </div>
                </div>
                {/* etablissement */}
                <div className="col-md-5">
                    <label for="fname" className="form-label">
                        Nom d'etablissement du dernier diplom
                    </label>
                    <input
                        type="text"
                        className="form-control is-valid"
                        id="fname"
                        value={etablissement}
                        onChange={(e) => setEtablissement(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                {/* email */}

                <div className="col-md-7">
                    <label for="mail" className="form-label">
                        Adresse Email
                    </label>
                    <input
                        type="email"
                        className="form-control is-invalid"
                        id="mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">provide valid email!</div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Terminer
                    </button>
                </div>
            </form>
            {/* confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>informaions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     revise bien tes informaions puis valider l'opertion
                </Modal.Body>
                
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Retourn
                        </Button>

                        <Button variant="primary" onClick={apply}>
                            Confirme formulaire
                        </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Form;
