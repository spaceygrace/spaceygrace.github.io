import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Notice from './routes/Notice';
import Home from "./routes/Home"
import Rsvp from './routes/Rsvp';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={ <Notice /> } />
      </Routes>

      {/* <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/rsvp" element={ <Rsvp /> } />
      </Routes> */}

      <header className="App-header">
        <p>Coming Soon</p>
      </header>
    </div>
  );
}


// <!-- <script type="text/javascript" src="https://test-grace.rsvpify.com/embed"></script> -->

export default App;
