import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./routes/Home"
import Rsvp from './routes/Rsvp';
// import demo

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/demo" element={ <Home /> } /> */}
        <Route path="/rsvp" element={ <Rsvp /> } />
      </Routes>


      <header className="App-header">
        <p>Coming Soon</p>
      </header>
    </div>
  );
}


// <!-- <script type="text/javascript" src="https://test-grace.rsvpify.com/embed"></script> -->

export default App;
