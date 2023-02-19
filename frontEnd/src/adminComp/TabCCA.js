import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TabCCA = () => {
    const [CCA, setCCA] = useState([]);
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
                            licence: "comptabilite, control et audit",
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
    return (
        <>
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
                    {CCA.map((item) => {
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

export default TabCCA;
