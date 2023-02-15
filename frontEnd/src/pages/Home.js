import React from 'react';
import NavBar from '../mainComp/NavBar';
import Body from '../mainComp/Body';
import Footer from '../mainComp/Footer';
import UpperMenu from '../mainComp/UpperMenu';
import Copyright from "../mainComp/Copyright";


const Home = () => {
  return (
      <div>
          <UpperMenu />
          <NavBar />
          <Body />
          <Footer />
          <Copyright />
      </div>
  );
}

export default Home