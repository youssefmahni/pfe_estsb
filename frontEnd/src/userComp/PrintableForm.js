import { useEffect, useState, useRef } from "react";

const PrintableForm = () => {
    const contentRef = useRef(null);
    const handlePrint = () => {
        const content = contentRef.current.innerHTML;
        const newWindow = window.open("", "", "width=1000,height=1000");
        newWindow.document.write(
            `<html><head><style>body { color: red; display:flex;flex-direction:column; justify-content:center; } </style></head><body>${content}</body></html>`
        );
        newWindow.print();
    };

    const [appID, setAppID] = useState("");
    const [app, setApp] = useState([]);
    const [licenceORmaster, setLicenceORmaster] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const responce = await fetch("http://localhost:3500/personal", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "token"
                        )}`,
                    },
                });
                const data = await responce.json();
                setAppID(data.response.applicationid);
                const resApp = await fetch("http://localhost:3500/find", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: data.response.applicationid }),
                });
                const App = await resApp.json();
                setApp([
                    App.response.cne,
                    App.response.fname,
                    App.response.lname,
                    App.response.sex,
                    App.response.age,
                    App.response.phone,
                    App.response.city,
                    App.response.codepostal,
                    App.response.master,
                    App.response.licence,
                    App.response.diplom,
                ]);
                App.response.licence
                    ? setLicenceORmaster("LICENCE")
                    : setLicenceORmaster("MASTER");
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, [appID]);

    return (
        <div className="container px-4 ">
            <div className="row ">
                <div class="col">
                    <div class="p-3 border text-center" ref={contentRef}>
                        <div className="row gx-5 p-5">
                            <h1>
                                fiche de preinscription en {licenceORmaster} "
                                {app[9] ? app[9] : app[8]}"
                            </h1>
                        </div>
                        <div className="row  p-5">
                            <h3>nom : {app[2]}</h3>
                            <h3> prenom : {app[2]}</h3>
                            <h3> cne : {app[0]}</h3>
                            <h3> gender : {app[3]}</h3>
                            <h3>date de naissance : {app[4]}</h3>
                            <h3> phone : {app[5]}</h3>
                            <h3> ville : {app[6]}</h3>
                            <h3> codepostal : {app[7]}</h3>
                        </div>
                    </div>
                    <div>
                        <button onClick={handlePrint}>Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintableForm;
