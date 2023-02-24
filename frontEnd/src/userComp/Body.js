import Form from "./Form";

function Body() {
    
    return (
        <div className="container rounded p-5" style={{ background: "#eee" }}>
            <div className="d-flex align-items-center flex-column pb-3">
                {sessionStorage.getItem("licence") !== "null" ? (
                    <>
                        <h2>
                            Formulaire de pré-inscription en ligne - Formation
                            Continue
                        </h2>
                        <h5>
                            Licence Professionnelle Universitaire -{" "}
                            {sessionStorage.getItem("licence")}
                        </h5>
                        <h6>
                            Année universitaire : {new Date().getFullYear()}-
                            {new Date().getFullYear() + 1}
                        </h6>
                    </>
                ) : (
                    <>
                        <h2>
                            Formulaire de pré-inscription en ligne - Formation
                            Continue
                        </h2>
                        <h5>
                            Master Specialisé Universitaire -{" "}
                            {sessionStorage.getItem("master")}
                        </h5>
                        <h6>Année universitaire : 2022/2023</h6>
                    </>
                )}
            </div>
            <Form />
        </div>
    );
}

export default Body;
