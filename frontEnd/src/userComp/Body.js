import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Options from "./Options";
import PrintableForm from "./PrintableForm";

function Body({ email, applicant, setApplicant }) {
    
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">APPLICATION</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey="second"
                                disabled={!applicant}
                            >
                                PRINT FORM
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" disabled>
                                FOLLOW PROCESS
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Options
                                email={email}
                                applicant={applicant}
                                setApplicant={setApplicant}
                            />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <PrintableForm/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">bye</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Body;
