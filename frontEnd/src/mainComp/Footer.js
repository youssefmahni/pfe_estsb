import React from 'react';

const Footer = () => {
    return (
      <div className=' container text-center col-lg-9 text-dark'  id='footer' >
          <div className="row justify-content-center">
              <div class="col-lg-5 col-12 mt-4">
                <img src={'./logo1.png'} alt="hh" width={100} height={100} />
              </div>
              <form class="col-lg-5 col-12 mt-4" onSubmit={(e)=> e.preventDefault()}>
                  <div class="mb-3">
                      <label for="eml" class="form-label">enter your email</label>
                      <input type="email" class="form-control" id="eml" placeholder="Example@gmail.com"/>
                  </div>
                  <div class="mb-3">
                      <label for="msg" class="form-label">write a message for us</label>
                      <input type="text" class="form-control" id="msg" placeholder="What do you thnk ?"/>
                  </div>
                  <button class="mb-3 btn btn-primary">
                      Send
                  </button>
  
              </form>
          </div>
  
          <div className="row row-col-2 justify-content-center">
              <div class="col col-lg-5 col-12">
                  <h1>contact</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      At sint quibusdam, ipsam odit officiis, suscipit mollitia numquam cupiditate,
                       perferendis consequatur atque voluptas! Repudiandae deserunt cumque odit,
                        molestias perferendis perspiciatis molestiae?
                  </p>
              </div>
              <div class="col col-lg-5 col-12">
                  <h1>info</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      At sint quibusdam, ipsam odit officiis, suscipit mollitia numquam cupiditate,
                       perferendis consequatur atque voluptas! Repudiandae deserunt cumque odit,
                        molestias perferendis perspiciatis molestiae?
                  </p>
              </div>
          </div>
          
          <div className="row mt-4 p-0">
              <div class="col">
                  <p> copyright 2023</p>
              </div> 
          </div>
      </div>
    )
  }
  export default Footer