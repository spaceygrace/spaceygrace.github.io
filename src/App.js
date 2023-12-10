import './App.css'
import Wedding from './routes/Wedding'
import Faq from './routes/Faq'
import Gallery from './routes/Gallery'
import Home from "./routes/Home"
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div class="app">
      <div class="background">
        <Navbar />
        <Routes >
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/details" element={ <Wedding /> } />
          <Route path="/faq" element={ <Faq /> } />
        </Routes>
      </div>
    </div>
  )
}


// finish mobille styuff
// figure out fonts??
// add a countdown
// transition animation effects as you go from one component to another
// like do a transition slidey scroll thing here
// have it possible to switch pages by justt scrolling also
// or no scrolling and just responsive
// double check notes on desk downstairs

export default App;
