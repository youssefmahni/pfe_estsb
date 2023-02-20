import Nav from "../mainComp/NavBar";
import LicenceTab from "../mainComp/LicenceTab";
import Footer from "../mainComp/Footer";
import Copyright from "../mainComp/Copyright";
import UpperMenu from "../mainComp/UpperMenu";

const Licence = () => {
    return (
        <div>
            <UpperMenu />
            <Nav />
            <LicenceTab />
            <br />
            <Footer />
            <Copyright />
        </div>
    );
};

export default Licence;
