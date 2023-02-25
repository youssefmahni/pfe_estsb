import Header from "../userComp/Header";
import Copyright from "../mainComp/Copyright";
import End from "./End";
const Personal = () => {

    return (
        <div>
            <Header />
            <br />
            <End/>
            <div style={ {position:"absolute" , bottom:"0px", width:"100%"}}>
                <Copyright/>
            </div>
            
        </div>
    );
};

export default Personal;
