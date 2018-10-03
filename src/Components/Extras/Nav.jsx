import React from "react";
import "../../scss/style.css";
import MenuIconPic from "../../img/icons/menu.svg";

class Nav extends React.Component {
    render() {
        return (
            <div className="Menu-Icon" style={{position: "fixed"}} onClick={this.props.load}>
                <img  src={MenuIconPic} alt="Menu Icon" style={{ height: "128px", width: "128px", display: "inline-block"}} /><h4 style={{color: "white", fontSize: "3.5em", display: "inline-block", marginTop: "15px"}}>Menu</h4>
            </div>
        );
    }
};

export default Nav;