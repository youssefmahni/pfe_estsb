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
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
