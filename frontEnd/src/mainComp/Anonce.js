import Carousel from "react-bootstrap/Carousel";

const Anonce = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block rounded"
                                src={"http://localhost:3500/media/est3.jpg"}
                                alt="First slide"
                                style={{
                                    height: "500px",
                                    width: "100%",
                                    filter: "blur(5px)",
                                }}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block  rounded"
                                src={"http://localhost:3500/media/est2.jpg"}
                                alt="Second slide"
                                style={{ height: "500px", filter: "blur(5px)" }}
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block rounded"
                                src={"http://localhost:3500/media/est1.jpg"}
                                alt="Third slide"
                                style={{ height: "500px", filter: "blur(5px)" }}
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Anonce;
