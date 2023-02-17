import Header from "../userComp/Header";
import Copyright from "../mainComp/Copyright";
import End from "./End";
// import Body from "../userComp/Body";
const Personal = () => {
    // const [email, setEmail] = useState("");
    // const [applicant, setApplicant] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const responce = await fetch("http://localhost:3500/personal", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${sessionStorage.getItem(
    //                         "token"
    //                     )}`,
    //                 },
    //             });
    //             const data = await responce.json();
    //             setEmail(data.response.email);
    //             setApplicant(data.response.applicant);
    //         } catch (error) {
    //             window.location.href = "/missing";
    //         }
            
    //     }
    //     fetchData();
    // }, []);

    return (
        <div>
            <Header />
            <br />
            <End/>
            <div style={ {position:"absolute" , bottom:"0px", width:"100%"}}>
                <Copyright/>
            </div>
            
        </div>
    );
};

export default Personal;
