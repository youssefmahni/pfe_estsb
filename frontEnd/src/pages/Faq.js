import React from 'react'
import NavBar from '../mainComp/NavBar'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Question from '../mainComp/Question';
import Footer from '../mainComp/Footer';

const Faq = () => {
  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const questions = ["question 1","question 2","question 3","question 4"];
  const answers = ["answer 1","answer 2","answer 3","answer 4"];



  return (
    <div>
      <div id='licence'>
        <NavBar/>
        <div className="container">
          <div className='row justify-content-center '>
            <Card  style={{marginTop:'8rem' , padding:'0rem',boxShadow: '0 15px 16.83px 0.17px rgba(0, 0, 0, .1)' }} className='col-lg-10'>
              <Card.Header>FAQ </Card.Header>
              <Card.Body>
                  <Question open={isOpen0} setOpen={setIsOpen0} question={questions[0]} answer={answers[0]}/>
                  <Question open={isOpen1} setOpen={setIsOpen1} question={questions[1]} answer={answers[1]}/>
                  <Question open={isOpen2} setOpen={setIsOpen2} question={questions[2]} answer={answers[2]}/>
                  <Question open={isOpen3} setOpen={setIsOpen3} question={questions[3]} answer={answers[3]}/>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      
      <div className=' bg-dark' id='footerDark' >
          <Footer />
      </div>
    </div>
    
  )
}

export default Faq