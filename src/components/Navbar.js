import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/rsvp">RSVP</Link>
            </div>
      )
}
export default Navbar;