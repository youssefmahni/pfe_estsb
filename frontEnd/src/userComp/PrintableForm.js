import { useEffect, useState } from "react";

const PrintableForm = ({ toPrint }) => {

  const [appID, setAppID] = useState("");
  const [app, setApp] = useState([]);
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
                console.log(appID);
                const resApp = await fetch("http://localhost:3500/find", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id: appID }),
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
            } catch (error) {
                window.location.href = "/missing";
            }
        }
        fetchData();
    }, [appID]);


    return (
        <div>
            <h1>PrintableForm</h1>
            <h1>{app[0]}</h1>
            <h1>{app[1]}</h1>
            <h1>{app[2]}</h1>
        </div>
    );
};

export default PrintableForm;
