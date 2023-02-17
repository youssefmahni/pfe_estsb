import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Faq from "./pages/Faq";
import Licence from "./pages/Licence";
import Master from "./pages/Master";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Personal from "./pages/Personal";
import Missing from "./pages/Missing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignAdmin from "./adminComp/SignAdmin"
import DashBoard from "./adminComp/DashBoard";
import Presentation from './pages/Presentation';
import Application from './pages/Application';
import CSTC from './pages/CSTC';
import ISITW from './pages/ISITW';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/licence" element={<Licence />} />
                  <Route path="/master" element={<Master />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/personal" element={<Personal />} />
                  <Route path="/application" element={<Application />} />\
                  <Route path="/admin/signin" element={<SignAdmin />} />
                  <Route path="/admin/dashboard" element={<DashBoard />} />
                  <Route
                      path="/estsb/presentation"
                      element={<Presentation />}
                  />
                  <Route path="/estsb/cstc" element={<CSTC />} />
                  <Route path="/estsb/isitw" element={<ISITW />} />
                  <Route path="*" element={<Missing />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
