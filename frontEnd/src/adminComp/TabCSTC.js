import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import * as XLSX from "xlsx";

const TabCSTC = () => {
    const [CCA, setCCA] = useState([]);
    const [etablissement, setEtablissement] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [diplom, setDiplom] = useState("");
    const [cin, setCin] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [datenaissance, setDatenaissance] = useState("");
    const [ville, setVille] = useState("");
    const [natio, setNatio] = useState("");
    const [mobile, setMobile] = useState("");
    const [serie, setSerie] = useState("");
    const [anneeb, setAnneeb] = useState("");
    const [mention, setMention] = useState("");
    const [anneed, setAnneed] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        const fetchTable = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3500/admin/licences",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            licence: "cyber securite et technologie cloud",
                        }),
                    }
                );
                const cursor = await response.json();
                const result = cursor.cursor;
                setCCA(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTable();
        console.log("finish");
    }, []);
    const exportExcel = () => {
        const minimalized = CCA.map(
            ({
                cin,
                nom,
                prenom,
                sex,
                datenaissance,
                ville,
                nationalite,
                phone,
                seriebac,
                anneebac,
                mentionbac,
                dernierdiplom,
                anneediplom,
                specialitediplom,
                etablissement,
                email,
            }) => ({
                cin,
                nom,
                prenom,
                sex,
                datenaissance,
                ville,
                nationalite,
                phone,
                seriebac,
                anneebac,
                mentionbac,
                dernierdiplom,
                anneediplom,
                specialitediplom,
                etablissement,
                email,
            })
        );
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(minimalized);
        XLSX.utils.book_append_sheet(wb, ws, "CSTC");
        XLSX.writeFile(wb, "CSTC.xlsx");
    };
    return (
        <>
            <button onClick={exportExcel} className={"xlsx"}>
                Export
            </button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            CIN <br />
                            <input
                                type="text"
                                onChange={(e) => setCin(e.target.value)}
                            />
                        </th>
                        <th>
                            Nom <br />
                            <input
                                type="text"
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </th>
                        <th>
                            Prenom <br />
                            <input
                                type="text"
                                onChange={(e) => setPrenom(e.target.value)}
                            />
                        </th>
                        <th>
                            Sexe <br />
                            <input
                                type="text"
                                onChange={(e) => setSexe(e.target.value)}
                            />
                        </th>
                        <th>
                            Date naissance <br />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setDatenaissance(e.target.value)
                                }
                            />
                        </th>
                        <th>
                            Ville <br />
                            <input
                                type="text"
                                onChange={(e) => setVille(e.target.value)}
                            />
                        </th>
                        <th>
                            Nationalte <br />
                            <input
                                type="text"
                                onChange={(e) => setNatio(e.target.value)}
                            />
                        </th>
                        <th>
                            Mobile <br />
                            <input
                                type="text"
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </th>
                        <th>
                            Serie bac <br />
                            <input
                                type="text"
                                onChange={(e) => setSerie(e.target.value)}
                            />
                        </th>
                        <th>
                            Annee bac <br />
                            <input
                                type="text"
                                onChange={(e) => setAnneeb(e.target.value)}
                            />
                        </th>
                        <th>
                            Mention bac <br />
                            <input
                                type="text"
                                onChange={(e) => setMention(e.target.value)}
                            />
                        </th>
                        <th>
                            Diplom <br />
                            <input
                                type="text"
                                onChange={(e) => setDiplom(e.target.value)}
                            />
                        </th>
                        <th>
                            Annee diplom <br />
                            <input
                                type="text"
                                onChange={(e) => setAnneed(e.target.value)}
                            />
                        </th>
                        <th>
                            Specialite <br />
                            <input
                                type="text"
                                onChange={(e) => setSpecialite(e.target.value)}
                            />
                        </th>
                        <th>
                            Nom etablissement
                            <br />
                            <input
                                type="text"
                                onChange={(e) =>
                                    setEtablissement(e.target.value)
                                }
                            />
                        </th>
                        <th>
                            Email <br />
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {CCA.map((item) => {
                        if (
                            item.etablissement
                                .toLocaleLowerCase()
                                .includes(etablissement) &&
                            item.specialitediplom
                                .toLocaleLowerCase()
                                .includes(specialite) &&
                            item.dernierdiplom
                                .toLocaleLowerCase()
                                .includes(diplom) &&
                            item.cin.toLocaleLowerCase().includes(cin) &&
                            item.nom.toLocaleLowerCase().includes(nom) &&
                            item.prenom.toLocaleLowerCase().includes(prenom) &&
                            item.sex.toLocaleLowerCase().includes(sexe) &&
                            item.datenaissance
                                .toLocaleLowerCase()
                                .includes(datenaissance) &&
                            item.ville.toLocaleLowerCase().includes(ville) &&
                            item.nationalite
                                .toLocaleLowerCase()
                                .includes(natio) &&
                            item.phone.toLocaleLowerCase().includes(mobile) &&
                            item.seriebac.toLocaleLowerCase().includes(serie) &&
                            item.anneebac
                                .toLocaleLowerCase()
                                .includes(anneeb) &&
                            item.mentionbac
                                .toLocaleLowerCase()
                                .includes(mention) &&
                            item.anneediplom
                                .toLocaleLowerCase()
                                .includes(anneed) &&
                            item.email
                                .toLocaleLowerCase()
                                .includes(email)
                        ) {
                            return (
                                <tr>
                                    <td>{item.cin}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.prenom}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.datenaissance}</td>
                                    <td>{item.ville}</td>
                                    <td>{item.nationalite}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.seriebac}</td>
                                    <td>{item.anneebac}</td>
                                    <td>{item.mentionbac}</td>
                                    <td>{item.dernierdiplom}</td>
                                    <td>{item.anneediplom}</td>
                                    <td>{item.specialitediplom}</td>
                                    <td>{item.etablissement}</td>
                                    <td>{item.email}</td>
                                </tr>
                            );
                        } else {
                            return [];
                        }
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TabCSTC;
