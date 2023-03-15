import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import * as XLSX from "xlsx";


const TabCCA = () => {
    const [CCA, setCCA] = useState([]);
    const [etablissement, setEtablissement] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [diplom, setDiplom] = useState("");
    const [datenaissance, setDatenaissance] = useState("");
    const [natio, setNatio] = useState("");
    const [serie, setSerie] = useState("");
    const [anneeb, setAnneeb] = useState("");
    const [mention, setMention] = useState("");
    const [anneed, setAnneed] = useState("");
    const [s1, setS1] = useState("");
    const [s2, setS2] = useState("");
    const [s3, setS3] = useState("");
    const [s4, setS4] = useState("");
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
                            licence: "finance, banque et assurance",
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
    }, []);
    const exportExcel = () => {
        // const minimalized = CCA.map(
        //     ({
        //         cin,
        //         nom,
        //         prenom,
        //         sex,
        //         datenaissance,
        //         ville,
        //         nationalite,
        //         phone,
        //         seriebac,
        //         anneebac,
        //         mentionbac,
        //         dernierdiplom,
        //         anneediplom,
        //         specialitediplom,
        //         etablissement,
        //         email,
        //     }) => ({
        //         cin,
        //         nom,
        //         prenom,
        //         sex,
        //         datenaissance,
        //         ville,
        //         nationalite,
        //         phone,
        //         seriebac,
        //         anneebac,
        //         mentionbac,
        //         dernierdiplom,
        //         anneediplom,
        //         specialitediplom,
        //         etablissement,
        //         email,
        //     })
        // );
        var wb = XLSX.utils.book_new();
        var ws = XLSX.utils.json_to_sheet(printable);
        XLSX.utils.book_append_sheet(wb, ws, "FBA");
        XLSX.writeFile(wb, "FBA.xlsx");
    };
    let printable = [];
    return (
        <>
            <button onClick={exportExcel} className={"xlsx"}>
                Export
            </button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            CIN
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Nom
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Prenom
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Sexe
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setDatenaissance(e.target.value)
                                }
                            />
                            Date naissance
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Ville
                        </th>
                        <th>
                            <input
                                type="text"
                                onChange={(e) => setNatio(e.target.value)}
                            />
                            Nationalte
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Mobile
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setSerie(e.target.value)}
                            />
                            Serie bac
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setAnneeb(e.target.value)}
                            />
                            Annee bac
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setMention(e.target.value)}
                            />
                            Mention bac
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setDiplom(e.target.value)}
                            />
                            Diplom
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setAnneed(e.target.value)}
                            />
                            Annee diplom
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) => setSpecialite(e.target.value)}
                            />
                            Specialite
                        </th>
                        <th style={{ minWidth: "150px" }}>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setEtablissement(e.target.value)
                                }
                            />
                            Nom etablissement
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Email
                        </th>
                        {/* added */}
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            Profile
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            <input
                                type="text"
                                onChange={(e) => setS1(e.target.value)}
                            />
                            Note_S1
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            RN_S1
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            <input
                                type="text"
                                onChange={(e) => setS2(e.target.value)}
                            />
                            Note_S2
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            RN_S2
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            <input
                                type="text"
                                onChange={(e) => setS3(e.target.value)}
                            />
                            Note_S3
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            RN_S3
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            <input
                                type="text"
                                onChange={(e) => setS4(e.target.value)}
                            />
                            Note_S4
                        </th>
                        <th
                            style={{ minWidth: "150px" }}
                            className="text-center"
                        >
                            RN_S4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {CCA.map((item) => {
                        if (
                            item.etablissement
                                .toLocaleLowerCase()
                                .includes(etablissement.toLocaleLowerCase()) &&
                            item.specialitediplom
                                .toLocaleLowerCase()
                                .includes(specialite.toLocaleLowerCase()) &&
                            item.dernierdiplom
                                .toLocaleLowerCase()
                                .includes(diplom.toLocaleLowerCase()) &&
                            item.datenaissance
                                .toLocaleLowerCase()
                                .includes(datenaissance) &&
                            item.nationalite
                                .toLocaleLowerCase()
                                .includes(natio.toLocaleLowerCase()) &&
                            item.seriebac
                                .toLocaleLowerCase()
                                .includes(serie.toLocaleLowerCase()) &&
                            item.anneebac
                                .toLocaleLowerCase()
                                .includes(anneeb) &&
                            item.mentionbac
                                .toLocaleLowerCase()
                                .includes(mention.toLocaleLowerCase()) &&
                            item.anneediplom
                                .toLocaleLowerCase()
                                .includes(anneed) &&
                            +item.s1 >= s1 &&
                            +item.s2 >= s2 &&
                            +item.s3 >= s3 &&
                            +item.s4 >= s4
                        ) {
                            printable = [
                                ...printable,
                                {
                                    cin: item.cin,
                                    nom: item.nom,
                                    prenom: item.prenom,
                                    sex: item.sex,
                                    datenaissance: item.datenaissance,
                                    ville: item.ville,
                                    nationalite: item.nationalite,
                                    seriebac: item.seriebac,
                                    anneebac: item.anneebac,
                                    mentionbac: item.mentionbac,
                                    dernierdiplom: item.dernierdiplom,
                                    anneediplom: item.anneediplom,
                                    specialitediplom: item.specialitediplom,
                                    etablissement: item.etablissement,
                                    noteS1: item.s1,
                                    noteS2: item.s2,
                                    noteS3: item.s3,
                                    noteS4: item.s4,
                                    phone: item.phone,
                                    email: item.email,
                                },
                            ];
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
                                    <td>
                                        <a
                                            href={`http://localhost:3500/uploads/${item.profile.slice(
                                                12
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"profile_" +
                                                item.nom +
                                                item.prenom +
                                                item.profile.slice(-4)}
                                        </a>
                                    </td>
                                    <td>{item.s1}</td>
                                    <td>
                                        <a
                                            href={`http://localhost:3500/uploads/${item.relves1.slice(
                                                12
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"s1_" +
                                                item.nom +
                                                item.prenom +
                                                item.relves1.slice(-4)}
                                        </a>
                                    </td>
                                    <td>{item.s2}</td>
                                    <td>
                                        <a
                                            href={`http://localhost:3500/uploads/${item.relves2.slice(
                                                12
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"s2_" +
                                                item.nom +
                                                item.prenom +
                                                item.relves2.slice(-4)}
                                        </a>
                                    </td>
                                    <td>{item.s3}</td>
                                    <td>
                                        <a
                                            href={`http://localhost:3500/uploads/${item.relves3.slice(
                                                12
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"s3_" +
                                                item.nom +
                                                item.prenom +
                                                item.relves3.slice(-4)}
                                        </a>
                                    </td>
                                    <td>{item.s4}</td>
                                    <td>
                                        <a
                                            href={`http://localhost:3500/uploads/${item.relves4.slice(
                                                12
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {"s4_" +
                                                item.nom +
                                                item.prenom +
                                                item.relves4.slice(-4)}
                                        </a>
                                    </td>
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

export default TabCCA;
