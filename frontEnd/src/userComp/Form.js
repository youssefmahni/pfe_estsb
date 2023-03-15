import { useState, useRef } from "react";
import BacSeries from "./BacSeries";
import MentionBac from "./MentionBac";
import Nationalities from "./Nationalities";
import Diploms from "./Diploms";
import Etablissements from "./Etablissements";
import Specialities from "./Specialities";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
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
    const NAME_REGEX = /[a-zA-Z ]{3,33}$/;
    const PHONE_REGEX = /^[6,7]{1}[0-9]{8}$/;
    const CIN_REGEX = /^[A-Z]{2}[0-9]{6}$/;
    const DATE_REGEX = /^(201[0-9]|202[0-3])$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const NOTE_REGEX = /^([0-9]|1[0-9]|20)$/;

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
    const s1Ref = useRef(null);
    const s2Ref = useRef(null);
    const s3Ref = useRef(null);
    const s4Ref = useRef(null);
    const relves1Ref = useRef(null);
    const relves2Ref = useRef(null);
    const relves3Ref = useRef(null);
    const relves4Ref = useRef(null);

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
    const [s1, setS1] = useState("");
    const [s2, setS2] = useState("");
    const [s3, setS3] = useState("");
    const [s4, setS4] = useState("");
    const [relves1, setRelves1] = useState("");
    const [relves2, setRelves2] = useState("");
    const [relves3, setRelves3] = useState("");
    const [relves4, setRelves4] = useState("");
    const code = uuidv4();

    const apply = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("uploads", fileInput.current.files[0]);
        formData.append("uploads", relves1Ref.current.files[0]);
        formData.append("uploads", relves2Ref.current.files[0]);
        formData.append("uploads", relves3Ref.current.files[0]);
        formData.append("uploads", relves4Ref.current.files[0]);
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
                s1,
                s2,
                s3,
                s4,
                relves1,
                relves2,
                relves3,
                relves4,
            }),
        });
        const data = await responce.json();
        if (data.status === "ok") {
            localStorage.setItem("cin", cin);
            sessionStorage.setItem("code", code);
            window.location.href = "/personal";
        }
    };

    return (
        <div className=" border p-4 bg-light rounded">
            <form className="row g-3" onSubmit={handleShow}>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6">
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
                            if (NAME_REGEX.test(e.target.value)) {
                                prenomRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                prenomRef.current.className = "form-control";
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
                            if (NAME_REGEX.test(e.target.value)) {
                                nomRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                nomRef.current.className = "form-control";
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
                                if (e.target.value === "") {
                                    sexRef.current.className = "form-control";
                                } else {
                                    sexRef.current.className =
                                        "form-control is-valid";
                                }
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
                            if (e.target.value === "") {
                                dnaissaceRef.current.className = "form-control";
                            } else {
                                dnaissaceRef.current.className =
                                    "form-control is-valid";
                            }
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
                            if (NAME_REGEX.test(e.target.value)) {
                                lieuRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                lieuRef.current.className = "form-control";
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
                                if (e.target.value === "") {
                                    natioRef.current.className = "form-select";
                                } else {
                                    natioRef.current.className =
                                        "form-select is-valid";
                                }
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
                                if (PHONE_REGEX.test(e.target.value)) {
                                    phoneRef.current.className =
                                        "form-control is-valid";
                                }
                                if (e.target.value === "") {
                                    phoneRef.current.className = "form-control";
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
                            if (CIN_REGEX.test(e.target.value)) {
                                cinRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                cinRef.current.className = "form-control";
                            } else {
                                cinRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        Le CIN morocain comprte 2 Lettres Majuscules puis 6
                        chiffres
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
                                if (e.target.value === "") {
                                    seriebacRef.current.className =
                                        "form-control ";
                                } else
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
                            if (DATE_REGEX.test(e.target.value)) {
                                anneebacRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                anneebacRef.current.className = "form-control";
                            } else {
                                anneebacRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        les bacs valides sont entre 2010 et 2023
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
                                if (e.target.value === "")
                                    mentionRef.current.className =
                                        "form-control";
                                else
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
                                if (e.target.value === "") {
                                    diplomRef.current.className =
                                        "form-control";
                                } else
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
                            if (DATE_REGEX.test(e.target.value)) {
                                anneedipRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                anneedipRef.current.className = "form-control";
                            } else {
                                anneedipRef.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        les diploms valides sont entre 2010 et 2023
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
                                if (e.target.value === "") {
                                    specialiteRef.current.className =
                                        "form-select";
                                } else
                                    specialiteRef.current.className =
                                        "form-select is-valid";
                            }}
                        >
                            <Specialities />
                        </select>
                    </div>
                </div>
                {/* notes */}
                <div className="col-md-3">
                    <label for="s1" className="form-label">
                        Note du premier semestre
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        className="form-control"
                        id="s1"
                        value={s1}
                        required
                        ref={s1Ref}
                        onChange={(e) => {
                            setS1(e.target.value);
                            if (NOTE_REGEX.test(e.target.value)) {
                                s1Ref.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                s1Ref.current.className = "form-control";
                            } else {
                                s1Ref.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        les notes valides sont entre 0 et 20
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="s2" className="form-label">
                        Note du deuxieme semestre
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        className="form-control"
                        id="s2"
                        value={s2}
                        required
                        ref={s2Ref}
                        onChange={(e) => {
                            setS2(e.target.value);
                            if (NOTE_REGEX.test(e.target.value)) {
                                s2Ref.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                s2Ref.current.className = "form-control";
                            } else {
                                s2Ref.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        les notes valides sont entre 0 et 20
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="s3" className="form-label">
                        Note du troisieme semestre
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        className="form-control"
                        id="s3"
                        value={s3}
                        required
                        ref={s3Ref}
                        onChange={(e) => {
                            setS3(e.target.value);
                            if (NOTE_REGEX.test(e.target.value)) {
                                s3Ref.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                s3Ref.current.className = "form-control";
                            } else {
                                s3Ref.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        les notes valides sont entre 0 et 20
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="s4" className="form-label">
                        Note du quatrieme semestre
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        className="form-control"
                        id="s4"
                        value={s4}
                        required
                        ref={s4Ref}
                        onChange={(e) => {
                            setS4(e.target.value);
                            if (NOTE_REGEX.test(e.target.value)) {
                                s4Ref.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                s4Ref.current.className = "form-control";
                            } else {
                                s4Ref.current.className =
                                    "form-control is-invalid";
                            }
                        }}
                    />
                    <div className="invalid-feedback">
                        les notes valides sont entre 0 et 20
                    </div>
                </div>
                {/* notes */}
                {/* relves de notes */}
                <div className="col-md-3">
                    <label for="relves2" className="form-label">
                        Relvee de note du s2
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id="relves2"
                        name="profile"
                        value={relves2}
                        onChange={(e) => {
                            setRelves2(e.target.value);
                            relves2Ref.current.className =
                                "form-control is-valid";
                        }}
                        ref={relves2Ref}
                    />
                </div>
                <div className="col-md-3">
                    <label for="relves1" className="form-label">
                        Relvee de note du s1
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id="relves1"
                        name="profile"
                        value={relves1}
                        onChange={(e) => {
                            setRelves1(e.target.value);
                            relves1Ref.current.className =
                                "form-control is-valid";
                        }}
                        ref={relves1Ref}
                    />
                </div>
                <div className="col-md-3">
                    <label for="relves3" className="form-label">
                        Relvee de note du s3
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id="relves3"
                        name="profile"
                        value={relves3}
                        onChange={(e) => {
                            setRelves3(e.target.value);
                            relves3Ref.current.className =
                                "form-control is-valid";
                        }}
                        ref={relves3Ref}
                    />
                </div>
                <div className="col-md-3">
                    <label for="relves4" className="form-label">
                        Relvee de note du s4
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id="relves4"
                        name="profile"
                        value={relves4}
                        onChange={(e) => {
                            setRelves4(e.target.value);
                            relves4Ref.current.className =
                                "form-control is-valid";
                        }}
                        ref={relves4Ref}
                    />
                </div>
                {/* relves de notes */}

                {/* etablissement */}
                <div className="col-md-5">
                    <label for="etablissement" className="form-label">
                        Nom d'etablissement du dernier diplom
                    </label>
                    <div>
                        <select
                            class="form-select"
                            id="etablissement"
                            value={etablissement}
                            ref={etabliRef}
                            onChange={(e) => {
                                setEtablissement(e.target.value);
                                if (e.target.value === "") {
                                    etabliRef.current.className =
                                        "form-control ";
                                } else
                                    etabliRef.current.className =
                                        "form-control is-valid";
                            }}
                        >
                            <Etablissements />
                        </select>
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
                            if (EMAIL_REGEX.test(e.target.value)) {
                                emailRef.current.className =
                                    "form-control is-valid";
                            } else if (e.target.value === "") {
                                emailRef.current.className = "form-control";
                            } else
                                emailRef.current.className =
                                    "form-control is-invalid";
                        }}
                        required
                        autoComplete="off"
                    />
                    <div className="invalid-feedback">
                        une adresse email correct come "exemple@example.abc"
                    </div>
                </div>
                {/* button */}
                <div className="col-12 pt-4">
                    <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={document.querySelector(".is-invalid")}
                    >
                        {document.querySelector(".is-invalid")?"corrige les champs invalides":"Terminer"}
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
