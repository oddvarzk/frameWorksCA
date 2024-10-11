import Nav from "../Nav/index.jsx";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


export function Header(){
    return (
        <header className="flex justify-between py-2 px-5 ml-5 mr-5 border-b-mutedTerracotta border">
            <div>
                <Link to="/">
                    <img className="h-28 w-28" src={logo} alt="Logo of website"/>
                </Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;
