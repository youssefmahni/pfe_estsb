import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MasterTab = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div
          className="col col-lg-10 p-0 rounded "
          style={{
            background: "white",
            boxShadow: "0 15px 16.83px 0.17px rgba(0, 0, 0, .1)",
          }}
        >
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify
            style={{ background: "transparent" }}
          >
            <Tab eventKey="home" title="Licences Fondamentales">
              <div className="p-5 ">
                <h3>Licences Fondamentales one</h3>
                <ul>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                </ul>
                <h3>Licences Fondamentales two</h3>
                <ul>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                </ul>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Licences Professionnelles">
              <div className="p-5 ">
                <h3>Licences Professionnelles one</h3>
                <ul>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                </ul>
                <h3>Licences Professionnelles two</h3>
                <ul>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                  <li>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</li>
                </ul>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MasterTab;
