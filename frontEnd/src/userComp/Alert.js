import Alert from "react-bootstrap/Alert";

const Alert2 = ({ show, setShow }) => {
    return (
        <div>
            {show ? (
                <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                    className="p-2 pb-0 m-0"
                >
                    <Alert.Heading>Verifie vos Cridentiels !</Alert.Heading>
                    <p>CIN et Code de condidature ne correspondent pas</p>
                </Alert>
            ) : null}
        </div>
    );
};

export default Alert2;
