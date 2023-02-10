import React from 'react';
import Nav from '../mainComp/NavBar';
import MasterTab from '../mainComp/MasterTab';
import Footer from '../mainComp/Footer';


const Master = () => {
  return (
    <div>
      <div id='licence'>
      <Nav/>
      <MasterTab/>
      </div>
      

      <div className=' bg-dark' id='footerDark' >
          <Footer />
      </div>
    </div>
  )
}

export default Master