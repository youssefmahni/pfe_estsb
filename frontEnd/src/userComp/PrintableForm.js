import { useEffect, useState } from "react";

const PrintableForm = () => {

  const [appID, setAppID] = useState("");
  const [app, setApp] = useState([]);
  const [licenceORmaster, setLicenceORmaster]= useState("");
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
                App.response.licence?setLicenceORmaster("LICENCE"):setLicenceORmaster("MASTER");
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, [appID]);


    return (
        <div>
            <h1>PrintableForm</h1>
            <h1>{licenceORmaster}</h1>
            <h1>{app[0]}</h1>
            <h1>{app[1]}</h1>
            <h1>{app[2]}</h1>
            <h1>{app[3]}</h1>
            <h1>{app[4]}</h1>
            <h1>{app[5]}</h1>
            <h1>{app[6]}</h1>
            <h1>{app[7]}</h1>
            <h1>{app[8]}</h1>
            <h1>{app[9]}</h1>
        </div>
    );
};

export default PrintableForm;
