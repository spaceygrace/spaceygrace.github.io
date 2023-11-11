import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./routes/Home"
import Faq from './routes/Faq';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/faq" element={ <Faq /> } />
        {/* <Route path="/rsvp" element={ <Rsvp /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
