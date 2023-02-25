import React from 'react'

const Noauth = () => {
  return (
      <div className="container">
          <a
              href="http://localhost:3000"
              target="_self"
              style={{ textDecoration: "none" }}
          >
              <div class="hit-the-floor">404</div>
          </a>
      </div>
  );
}

export default Noauth