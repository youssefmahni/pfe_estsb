import { useEffect, useState } from "react";
import Header from "../userComp/Header";
import Body from "../userComp/Body";

const Personal = () => {
    const [email, setEmail] = useState("");
    const [applicant, setApplicant] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const responce = await fetch("http://localhost:3500/personal", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            });
            const data = await responce.json();
            setEmail(data.response.email);
            setApplicant(data.response.applicant);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>hello {email}</h1>
            <Header />
            <Body
                email={email}
                applicant={applicant}
                setApplicant={setApplicant}
            />
        </div>
    );
};

export default Personal;
