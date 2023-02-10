import React from 'react'
import NavBar from './NavBar'

const Head = () => {
  return (
    <div id="header" >
        <NavBar/>
        <div className="container-sm">
            <div className="row justify-content-center align-items-center text-white fw-bolder fs-1" style={ {height:'80vh'}}>
                <h1 className='col-lg-10 text-dark font-weight-bold' style={ {textAlign:'center',textShadow: '1px 1px 1px #0d6efd'}}>WELCOME TO THE FUTURE</h1>
            </div> 
        </div>  
    </div>
  )
}

export default Head