import { Routes, Route, Link } from "react-router-dom";
import Logo from './About/svg/logo';
import About from "./About/about";
import Events from "./Events/index";
import Artist from "./Artists/index";
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <div className="logo-container">
            <Logo className="logo" />
          </div>
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Events" className="nav-link">Events</Link>
          <Link to="/Artist" className="nav-link">Artist</Link>
        </nav>
      </div>

      
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Artist" element={<Artist />} />
      </Routes>
    </>
  );
}

export default Header;
