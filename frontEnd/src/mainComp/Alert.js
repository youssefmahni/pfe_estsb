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
                    <Alert.Heading>email or password incorrect</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit. Cras mattis consectetur purus sit
                        amet fermentum.
                    </p>
                </Alert>
            ) : null}
        </div>
    );
};

export default Alert2;

