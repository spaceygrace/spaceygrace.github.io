import { Link } from "react-router-dom"

const Navbar =()=>{
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/faq">FAQ</Link>
      <a href="rsvp.html" target={"_blank"}>RSVP</a>

    </div>
  )
}
export default Navbar;