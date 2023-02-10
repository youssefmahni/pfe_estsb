import Nav from '../mainComp/NavBar';
import LicenceTab from '../mainComp/LicenceTab';
import Footer from '../mainComp/Footer';

const Licence = () => {
  return (
    <div>
      <div id='licence'>
      <Nav/>
      <LicenceTab/>
      </div>
      

      <div className=' bg-dark' id='footerDark' >
          <Footer />
      </div>
    </div>

  )
}

export default Licence