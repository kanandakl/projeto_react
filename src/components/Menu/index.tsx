import "./style.css";
import logo from "../../img/logo.jpg"
import {Link} from "react-router-dom";
export const Menu = () => {
    return (
        <>
            <header>
               
               <h1 className="logo"><img src={logo}/></h1> 
            
                
                <nav className="Menu">
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                        <li><Link to='/sobre'>Camisas</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>                                                                       
                    </ul>
                </nav>
            </header>
        </>
    )
};