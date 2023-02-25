import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Faq from "./pages/Faq";
import Licence from "./pages/Licence";
import Master from "./pages/Master";
import Personal from "./pages/Personal";
import Missing from "./pages/Missing";
import Noauth from "./pages/Noauth";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignAdmin from "./adminComp/SignAdmin"
import DashBoard from "./adminComp/DashBoard";
import Presentation from './pages/Presentation';
import Application from './pages/Application';
import CSTC from './pages/CSTC';
import ISITW from './pages/ISITW';
import Poursuivre from "./pages/Poursuivre";
import CCA from './pages/CCA';
import FBA from "./pages/FBA";
import GCF from "./pages/GCF";
import MO from "./pages/MO";
import MCSTC from "./pages/MCSTC";
import MISITW from "./pages/MISITW";
import MCCA from "./pages/MCCA";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/licence" element={<Licence />} />
                  <Route path="/master" element={<Master />} />
                  <Route path="/personal" element={<Personal />} />
                  <Route path="/application" element={<Application />} />
                  <Route path="/poursuivre/:code" element={<Poursuivre />} />
                  <Route path="/admin/signin" element={<SignAdmin />} />
                  <Route path="/admin/dashboard" element={<DashBoard />} />
                  <Route
                      path="/estsb/presentation"
                      element={<Presentation />}
                  />
                  <Route path="/estsb/cstc" element={<CSTC />} />
                  <Route path="/estsb/isitw" element={<ISITW />} />
                  <Route path="/estsb/cca" element={<CCA />} />
                  <Route path="/estsb/fba" element={<FBA />} />
                  <Route path="/estsb/gcf" element={<GCF />} />
                  <Route path="/estsb/mo" element={<MO />} />
                  <Route path="/estsb/mcstc" element={<MCSTC />} />
                  <Route path="/estsb/misitw" element={<MISITW />} />
                  <Route path="/estsb/mcca" element={<MCCA />} />
                  <Route path="/missing" element={<Missing />} />
                  <Route path="/*" element={<Noauth />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
