import { useState, useRef } from "react";
import BacSeries from "./BacSeries";
import MentionBac from "./MentionBac";
import Nationalities from "./Nationalities";
import Diploms from "./Diploms";
import Specialities from "./Specialities";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleShow = async (e) => {
        e.preventDefault();
        const responce = await fetch("http://localhost:3500/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                cin,
            }),
        });
        const data = await responce.json();
        if (data.status === "ko") {
            setShow1(true);
        } else {
            setShow(true);
        }
    };
    //regex
    const NAME_REGEX = /[a-zA-Z ]{2,33}$/;
    const PHONE_REGEX = /[6,7]{1}[0-9]{7}$/;
    const CIN_REGEX = /^[A-Z]{2}[0-9]{5}$/;
    const DATE_REGEX = /^(20[0-2])$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //refs
    const fileInput = useRef(null);
    const prenomRef = useRef(null);
    const nomRef = useRef(null);
    const sexRef = useRef(null);
    const dnaissaceRef = useRef(null);
    const lieuRef = useRef(null);
    const natioRef = useRef(null);
    const phoneRef = useRef(null);
    const cinRef = useRef(null);
    const seriebacRef = useRef(null);
    const anneebacRef = useRef(null);
    const mentionRef = useRef(null);
    const diplomRef = useRef(null);
    const anneedipRef = useRef(null);
    const specialiteRef = useRef(null);
    const etabliRef = useRef(null);
    const emailRef = useRef(null);

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
    const code = uuidv4();
    const [cin1, setCin1] = useState("");
    const [code1, setCode1] = useState("");

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
                code: code,
                etat: "dossier sous traitement",
            }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            localStorage.setItem("cin", cin);
            sessionStorage.setItem("code", code);
            window.location.href = "/personal";
        }
    };
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
            window.location.href = `/poursuivre/${code}`;
        } else {
            setError("CIN or code d’accès incorrect !");
        }
    };
    return (
        <div className=" border p-4 bg-light rounded">
            <div className="border p-2 rounded">
                <p>
                    Pour poursuivre votre dossier de préinscription, veuillez
                    saisir votre numéro de CIN ainsi que votre code d’accès.
                </p>
                <form onSubmit={poursuivre}>
                    <input
                        className="m-1 p-1"
                        type="text"
                        placeholder="votre cin"
                        value={cin1}
                        onChange={(e) => {
                            setCin1(e.target.value);
                        }}
                    />
                    <input
                        className="m-1 p-1"
                        type="text"
                        placeholder="votre code d'acces"
                        value={code1}
                        onChange={(e) => {
                            setCode1(e.target.value);
                        }}
                    />
                    <button className="m-1 p-1 rounded" type="submit">
                        acceder
                    </button>
                </form>
                <p className="text-danger">{error}</p>
            </div>
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
                                    className="form-control"
                                    type="file"
                                    id="image"
                                    name="profile"
                                    value={profile}
                                    onChange={(e) => {
                                        setProfile(e.target.value);
                                        fileInput.current.className =
                                            "form-control is-valid";
                                    }}
                                    ref={fileInput}
                                />
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                {/* prenom */}
                <div className="col-md-4">
                    <label for="fname" className="form-label">
                        Prenom
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fname"
                        value={prenom}
                        ref={prenomRef}
                        onChange={(e) => {
                            setPrenom(e.target.value);
                            if (NAME_REGEX.test(prenom)) {
                                prenomRef.current.className =
                                    "form-control is-valid";
                            } else {
                                prenomRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        fournir votre prenom légal
                    </div>
                </div>
                {/* nom */}
                <div className="col-md-4">
                    <label for="lname" className="form-label">
                        Nom
                    </label>
                    <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        id="lname"
                        value={nom}
                        required
                        ref={nomRef}
                        onChange={(e) => {
                            setNom(e.target.value);
                            if (NAME_REGEX.test(nom)) {
                                nomRef.current.className =
                                    "form-control is-valid";
                            } else {
                                nomRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        fournir votre nom légal
                    </div>
                </div>
                {/* sex */}
                <div className="col-md-4">
                    <label for="sex" className="form-label">
                        Sex
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="sex"
                            value={sex}
                            ref={sexRef}
                            onChange={(e) => {
                                setSex(e.target.value);
                                sexRef.current.className =
                                    "form-control is-valid";
                            }}
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
                        className="form-control "
                        id="age"
                        value={datenaissance}
                        onChange={(e) => {
                            setDatenaissance(e.target.value);
                            dnaissaceRef.current.className =
                                "form-control is-valid";
                        }}
                        required
                        ref={dnaissaceRef}
                    />
                    <div className="invalid-feedback">
                        fournir votre date naissance mm/dd/yyyy
                    </div>
                </div>
                {/* ville */}
                <div className="col-md-4">
                    <label for="ville" className="form-label">
                        Lieu de naissance
                    </label>
                    <input
                        type="text"
                        className="form-control "
                        id="ville"
                        value={ville}
                        required
                        autoComplete="off"
                        ref={lieuRef}
                        onChange={(e) => {
                            setVille(e.target.value);
                            if (NAME_REGEX.test(ville)) {
                                lieuRef.current.className =
                                    "form-control is-valid";
                            } else {
                                lieuRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        fournir une ville valid
                    </div>
                </div>
                {/* Nationalite */}
                <div className="col-md-4">
                    <label for="natio" className="form-label">
                        Nationalite
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="natio"
                            value={nationalite}
                            ref={natioRef}
                            onChange={(e) => {
                                setNationalite(e.target.value);
                                natioRef.current.className =
                                    "form-select is-valid";
                            }}
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
                            class="form-control"
                            placeholder="Recipient's phone number"
                            id="phone"
                            value={phone}
                            ref={phoneRef}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                if (PHONE_REGEX.test(phone)) {
                                    phoneRef.current.className =
                                        "form-control is-valid";
                                } else {
                                    phoneRef.current.className =
                                        "form-control is-invalid";
                                }
                            }}
                            required
                            autoComplete="off"
                        />
                        <div className="invalid-feedback">
                            Founie un numero de telephone morocain
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
                        className="form-control"
                        id="cne"
                        value={cin}
                        ref={cinRef}
                        onChange={(e) => {
                            setCin(e.target.value);
                            if (CIN_REGEX.test(cin)) {
                                cinRef.current.className =
                                    "form-control is-valid";
                            } else {
                                cinRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        Founie un CIN morocain
                    </div>
                </div>
                {/* serie bac */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        serie bac
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="choice"
                            value={seriebac}
                            ref={seriebacRef}
                            onChange={(e) => {
                                setSeriebac(e.target.value);
                                seriebacRef.current.className =
                                    "form-control is-valid";
                            }}
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
                        className="form-control"
                        id="anneebac"
                        value={anneebac}
                        ref={anneebacRef}
                        onChange={(e) => {
                            setAnneebac(e.target.value);
                            if (DATE_REGEX.test(anneebac)) {
                                anneebacRef.current.className =
                                    "form-control is-valid";
                            } else {
                                anneebacRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        fourni une annee valid
                    </div>
                </div>
                {/* mention bac */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        Mention bac
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="choice"
                            value={mentionbac}
                            ref={mentionRef}
                            onChange={(e) => {
                                setMentionbac(e.target.value);
                                mentionRef.current.className =
                                    "form-control is-valid";
                            }}
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
                            class="form-select"
                            id="choice"
                            value={dernierdiplom}
                            ref={diplomRef}
                            onChange={(e) => {
                                setDernierdiplom(e.target.value);
                                diplomRef.current.className =
                                    "form-control is-valid";
                            }}
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
                        className="form-control"
                        id="anneedip"
                        value={anneediplom}
                        ref={anneedipRef}
                        onChange={(e) => {
                            setAnneediplom(e.target.value);
                            if (DATE_REGEX.test(anneediplom)) {
                                anneedipRef.current.className =
                                    "form-control is-valid";
                            } else {
                                anneedipRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        fourni une annee valid
                    </div>
                </div>
                {/* specialite */}
                <div className="col-md-4">
                    <label for="choice" className="form-label">
                        Specialite du dernier diplom
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="choice"
                            value={specialitediplom}
                            ref={specialiteRef}
                            onChange={(e) => {
                                setSpecialitediplom(e.target.value);
                                specialiteRef.current.className =
                                    "form-select is-valid";
                            }}
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
                        className="form-control"
                        id="fname"
                        value={etablissement}
                        ref={etabliRef}
                        onChange={(e) => {
                            setEtablissement(e.target.value);
                            if (NAME_REGEX.test(etablissement)) {
                                etabliRef.current.className =
                                    "form-control is-valid";
                            } else {
                                etabliRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        fournir un nom d'etablissement correct
                    </div>
                </div>
                {/* email */}
                <div className="col-md-7">
                    <label for="mail" className="form-label">
                        Adresse Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="mail"
                        value={email}
                        ref={emailRef}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (EMAIL_REGEX.test(email)) {
                                emailRef.current.className =
                                    "form-control is-valid";
                            } else {
                                emailRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        fournir une adresse email correct!
                    </div>
                </div>
                {/* button */}
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Terminer
                    </button>
                </div>
            </form>
            {/* confirmation */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Assurez-vous que les informations fournies sont correctes
                    avant de valider le formulaire
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Retourn
                    </Button>

                    <Button variant="primary" onClick={apply}>
                        Je confirme
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Attention!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cet utilisateur est deja inscrit</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Retourn
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Form;
