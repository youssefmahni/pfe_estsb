import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import * as XLSX from "xlsx";


const TabISITW = () => {
    const [ISITW, setISITW] = useState([]);
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
                            licence:
                                "ingenierie des systems informatiques et technologies web",
                        }),
                    }
                );
                const cursor = await response.json();
                const result = cursor.cursor;
                setISITW(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTable();
        console.log("finish");
    }, []);
    const exportExcel = () => {
        const minimalized = ISITW.map(
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
        XLSX.utils.book_append_sheet(wb, ws, "ISITW");
        XLSX.writeFile(wb, "ISITW.xlsx");
    };
    return (
        <>
            <button onClick={exportExcel} className={"xlsx"}>
                Export
            </button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CIN</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Sexe</th>
                        <th>Date naissance</th>
                        <th>Ville</th>
                        <th>Nationalte</th>
                        <th>Mobile</th>
                        <th>Serie bac</th>
                        <th>Annee bac</th>
                        <th>Mention bac</th>
                        <th>Diplom</th>
                        <th>Annee diplom</th>
                        <th>Specialite</th>
                        <th>Nom etablissement</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {ISITW.map((item) => {
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
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TabISITW;
