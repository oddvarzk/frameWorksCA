import Nav from "./nav.jsx";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export function Header(){
    return (
        <header className="flex justify-between py-2 px-5">
            <div>
                <Link to="/">
                    <img className="h-36 w-36" src={logo} alt="Logo of website"/>
                </Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;
