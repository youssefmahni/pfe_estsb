import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Options from "./Options";

function Body({email, applicant}) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" disabled>
                                Tab 2
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" disabled>
                                Tab 3
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Options email={email} applicant={applicant} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">hello</Tab.Pane>
                        <Tab.Pane eventKey="third">bye</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Body;