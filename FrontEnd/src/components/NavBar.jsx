import {NavLink} from "react-router-dom";
import '../styles/index.css'
function NavBar(){
    return (
        <nav className="nav-bar">
            <div className="navbar-left">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </div>
            <div><h2>Open library</h2></div>
        </nav>
    );
}

export default NavBar;