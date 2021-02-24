import './Header.css'
import background from "./bg.jpg";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

function Header() {
    return(
        <div className="container">
            <div></div>
            <div className="containerText">
                <Typography variant="h2" align="center" gutterBottom>Benedikt</Typography>
                <Typography variant="subtitle1" align="center">Projektleiter<br/>Lehrer<br/>Tüftler</Typography>
            </div>
        </div>
    );
}
  
export default Header;  