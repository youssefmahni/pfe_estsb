import React from "react";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="foot">
            <div className="container ">
                <div className="row">
                    <div class="p-4 mb-3 footlogo">
                        <img
                            src={"http://localhost:3500/media/logo-white.png"}
                            alt="hh"
                            width={170}
                        />
                    </div>
                    {/* <form
                        class="col-lg-6 col-12 mt-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div class="mb-3">
                            <label for="eml" class="form-label">
                                enter your email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="eml"
                                placeholder="Example@gmail.com"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="msg" class="form-label">
                                write a message for us
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="msg"
                                placeholder="What do you thnk ?"
                            />
                        </div>
                        <button class="mb-3 btn btn-primary">Send</button>
                    </form> */}
                </div>

                <div className="row">
                    <div class="col col-lg-4">
                        <h6>STUDENT AREA</h6>
                        <ul>
                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/occupational-integration/"
                                    target={"_blank"}
                                >
                                    Occupational integration
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/useful-addresses/"
                                    target={"_blank"}
                                >
                                    Useful informations
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/library/"
                                    target={"_blank"}
                                >
                                    Online services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/activities/"
                                    target={"_blank"}
                                >
                                    Activities
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/insurance/"
                                    target={"_blank"}
                                >
                                    Free Health Insurance
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/medicalcover/"
                                    target={"_blank"}
                                >
                                    Health Insurance
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/mobility/"
                                    target={"_blank"}
                                >
                                    Mobility
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/scholarship/"
                                    target={"_blank"}
                                >
                                    Scholarship
                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://www.ucd.ac.ma/student-area/student-guide/"
                                    target={"_blank"}
                                >
                                    Student Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col col-lg-4">
                        <h6>APROPOS DE L'ESTSB</h6>
                        <p style={{ fontSize: "14px" }}>
                            Chouaib Doukkali University is a public university
                            in El Jadida, Morocco, founded by a royal decree
                            (Dahir) in 1985. The university is named after the
                            Moroccan scholar, theologian, and politician Abou
                            Chouaib Doukkali (1878–1937)
                        </p>
                    </div>
                    <div class="col col-lg-4">
                        <h6>CONTACTEZ NOUS</h6>
                        <ul class="fa-ul">
                            <li>
                                <i class="fa-li fa fa-map-marker"></i>Chouaib
                                Doukkali University Jabran Khalil Jabran Avenue
                                B.P 299-24000
                            </li>
                            <li>El jadida Grand-Casablanca Morocco</li>
                            <li>
                                <i class="fa-li fa fa-phone"></i>
                            </li>
                            <li> Tel: 05 23 34 44 47 / 05 23 34 44 48</li>
                            <li>Fax: 05 23 34 44 49</li>
                            <li>
                                <i class="fa-li fa fa-envelope"></i>
                                <a href="mailto:communication@ucd.ac.ma">
                                    communication@ucd.ac.ma
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
