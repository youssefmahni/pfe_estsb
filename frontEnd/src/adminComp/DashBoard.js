import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Lone from "./Lone";
import Ltwo from "./Ltwo";
import Mone from "./Mone";
import Mtwo from "./Mtwo";

const DashBoard = () => {
    return (
            <div className="container">
                <h1>DashBoard</h1>
                <br />
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    justify
                    style={{ background: "transparent" }}
                >
                    <Tab eventKey="profile" title="Licences one">
                        <div className="p-5 ">
                            <h3>Licences one</h3>
                            <Lone />
                        </div>
                    </Tab>
                    <Tab eventKey="home" title="Licences two">
                        <div className="p-5 ">
                            <h3>Licences two</h3>
                            <Ltwo />
                        </div>
                    </Tab>

                    <Tab eventKey="profile2" title="Master one">
                        <div className="p-5 ">
                            <h3>Master one</h3>
                            <Mone />
                        </div>
                    </Tab>
                    <Tab eventKey="profile3" title="Master two">
                        <div className="p-5 ">
                            <h3>Master two</h3>
                            <Mtwo />
                        </div>
                    </Tab>
                </Tabs>
                <br />
            </div>
    );
};

export default DashBoard;
