import React from 'react'

const Missing = () => {
  return (
      <div className='container'>
          <a
              href="http://localhost:3000"
              target="_self"
              style={{ textDecoration: "none", fontSize:"10px" }}
          >
              <div class="hit-the-floor">you are not authorized</div>
          </a>
      </div>
  );
}

export default Missing