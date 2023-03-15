import Carousel from "react-bootstrap/Carousel";

const Anonce = () => {
    return (
        <div>
            <div className="row justify-content-center" >
                <div >
                    <Carousel >
                        <Carousel.Item style={ { maxHeight:"500px"}}>
                            <video
                                src="http://localhost:3500/media/colaboration.mp4"
                                autoPlay
                                loop
                                style={{
                                    width: "100%",
                                    
                                }}
                            ></video>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={ { maxHeight:"500px"}}>
                            <img
                                src="http://localhost:3500/media/class.jpg"
                                alt="classroom"
                                style={{
                                    width: "100%",
                                    height:"715px"
                                }}
                            ></img>

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item style={ { maxHeight:"500px"}}>
                            <video
                                src="http://localhost:3500/media/code.mp4"
                                autoPlay
                                loop
                                style={{
                                    width: "100%",
                                }}
                            ></video>

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
