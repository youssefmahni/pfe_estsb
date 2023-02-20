import Nav from "../mainComp/NavBar";
import MasterTab from "../mainComp/MasterTab";
import Footer from "../mainComp/Footer";
import Copyright from "../mainComp/Copyright";
import UpperMenu from "../mainComp/UpperMenu";

const Licence = () => {
    return (
        <div>
            <UpperMenu />
            <Nav />
            <MasterTab />
            <br />
            <Footer />
            <Copyright />
        </div>
    );
};

export default Licence;
