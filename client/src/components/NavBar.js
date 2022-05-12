import Button from "react-bootstrap/Button";
import logo from "../NEX logo.svg"    
import { NavLink } from "react-router-dom";

const navNonActiveStyle = {
    display: "inline-block",
    padding: "2px 10px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "gray",
}

const navActiveStyle = {
    color: "white",
    fontWeight: "500",
    // textDecorationLine: "underline"
}

const navStyle = {
    background: "rgb(33, 37, 41)",
    height: "55px",
    display: "flex",
    alignItems: "center", 
    justifyContent: "space-between",
}

function NavBar({user, logOut}) {
    return(
        <div id="navBar" style={navStyle} >
            <div style={{padding: "0 0 0 20px" }} >
                <NavLink to="/" exact >
                    <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top" />
                </NavLink>
                
                <NavLink
                    to="/" exact
                    style={navNonActiveStyle}
                    activeStyle={navActiveStyle}
                >
                Neighborhood Tools
                </NavLink>

                <NavLink
                    to="/rentals" 
                    style={navNonActiveStyle}
                    activeStyle={navActiveStyle} 
                >
                My Rentals
                </NavLink>

                <NavLink
                    to="/tools" 
                    style={navNonActiveStyle}
                    activeStyle={navActiveStyle} 
                >
                My Tools
                </NavLink>
            </div>   

            <div style={{padding: "0 5vw 0 0" }} >
                <span style={{color: "gray"}}>Hi, {user.username} &ensp; </span>
                <Button variant="outline-light" size="sm" type="submit" onClick={logOut}  >Log out</Button>
            </div>
        </div>
    )
}
export default NavBar;