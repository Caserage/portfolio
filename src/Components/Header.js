import './Header.css'
import background from "./bg.jpg";
import React from "react";

import { AppBar, Slide, Toolbar, Typography, useScrollTrigger} from "@material-ui/core";

function ShowOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true
    });

    return (
        <Slide appear={true} direction="down" in={trigger}>
            {children}
        </Slide>
    )
}

function Header() {
    return(
        <>
            <ShowOnScroll>
                <AppBar color="primary">
                    <Toolbar>
                        <Typography variant="h6">Portfolio</Typography>
                    </Toolbar>
                </AppBar>
            </ShowOnScroll>
            <div className="container">
                <div className="container-bg"></div>
                <div className="container-image"></div>
                <div className="container-text">
                    <Typography variant="h2" align="center" gutterBottom>Benedikt</Typography>
                    <Typography variant="subtitle1" align="center">Projektleiter<br/>Lehrer<br/>Tüftler</Typography>
                </div>
            </div>
        </>
    );
}
  
export default Header;  