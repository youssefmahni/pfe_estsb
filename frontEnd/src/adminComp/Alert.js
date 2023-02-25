import Alert from "react-bootstrap/Alert";

const Alert2 = ({ show, setShow }) => {

    return (
        <div>
            {show ? (
                <Alert
                    variant="danger"
                    onClose={() => setShow(false)}
                    dismissible
                >
                    <Alert.Heading>Verifie vos Cridentiels !</Alert.Heading>
                    <p>
                        si tu n'as pas un mot de passe valide, tu dois le
                        demander au administration
                    </p>
                </Alert>
            ) : null}
        </div>
    );
};

export default Alert2;

