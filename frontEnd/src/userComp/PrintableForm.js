import React from "react";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFDownloadLink,
    Image,
} from "@react-pdf/renderer";

const MyDocument = ({ data }) => {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: "#ffffff",
            padding: 24,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            padding: "10px",
        },
        section: {
            marginBottom: 24,
        },
        text: {
            fontSize: 14,
            lineHeight: 2,
        },
        header: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        logo: {
            width: "40%",
        },
        img: {
            maxWidth: "30%",
            maxHeight: "30%",
            padding: "5%",
        },
    });

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.header}>
                        <Image
                            style={styles.logo}
                            src={"http://localhost:3500/media/logo.jpg"}
                        />
                        <Text style={styles.title}>
                            Formulaire de préinscription{" "}
                            {new Date().getFullYear()}-
                            {new Date().getFullYear() + 1}
                        </Text>
                    </View>
                    <View style={styles.header}>
                        <Image
                            style={styles.img}
                            src={`http://localhost:3500/photos/${
                                data
                                    ? data.profile.slice(12)
                                    : "logo.jpg"
                            }`}
                        />
                        <Text style={styles.text}>
                            FILIÈRE DEMENDÉE :{" "}
                            {data.master === "null"
                                ? data.licence
                                : data.master}
                        </Text>
                        <Text style={styles.text}>
                            Code de condidature : {data.code}
                        </Text>
                        <Text style={styles.text}>Nom : {data.nom}</Text>
                        <Text style={styles.text}>Prenom: {data.prenom}</Text>
                        <Text style={styles.text}>CIN : {data.cin}</Text>
                        <Text style={styles.text}>Sexe : {data.sex}</Text>
                        <Text style={styles.text}>
                            Date de Naissance : {data.datenaissance}
                        </Text>
                        <Text style={styles.text}>
                            Ville de Naissance : {data.ville}
                        </Text>
                        <Text style={styles.text}>
                            Nationalite : {data.nationalite}
                        </Text>
                        <Text style={styles.text}>
                            Seire Baccalauréat : {data.seriebac}
                        </Text>
                        <Text style={styles.text}>
                            Annee Baccalauréat : {data.anneebac}
                        </Text>
                        <Text style={styles.text}>
                            Dernier Diplom : {data.dernierdiplom}
                        </Text>
                        <Text style={styles.text}>
                            Annee du Dernier Diplom : {data.anneediplom}
                        </Text>
                        <Text style={styles.text}>
                            Specialite du Dernier Diplom :{" "}
                            {data.specialitediplom}
                        </Text>
                        <Text style={styles.text}>
                            Etablissement du Dernier Diplom :{" "}
                            {data.etablissement}
                        </Text>
                        <Text style={styles.text}>
                            Adresse Email : {data.email}
                        </Text>
                        <Text style={styles.text}>
                            Numero Mobile: {data.phone}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

const GeneratePDFButton = ({ code }) => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3500/findbycode", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: code }),
            });
            const data = await response.json();
            setUserData(data.response);
        };
        fetchData();
    }, [code]);

    return (
        <PDFDownloadLink
            document={<MyDocument data={userData} />}
            fileName="Formulaire.pdf"
        >
            {({ blob, url, loading, error }) =>
                loading ? (
                    "Generating PDF..."
                ) : (
                    <Button
                        variant="light"
                        style={{
                            boxShadow: "0 1px 16.83px 0.17px rgba(0, 0, 0, .1)",
                        }}
                    >
                        Telecharger Formulaire
                    </Button>
                )
            }
        </PDFDownloadLink>
    );
};

export default GeneratePDFButton;
