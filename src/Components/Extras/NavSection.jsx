import * as React from 'react';
import Logo from "../../img/icons/TopView2.1.png";

class NavSection extends React.Component {
    render() {
        return (
            <div className="Section">
                <h4 onClick={this.props.close}>Close</h4>
                <div className="Section-Links text-center">
                    <img src={Logo} alt="TopView Logo" style={{ height: "175px", width: "175px" }} />
                    <div className="links">
                        <h3 onClick={this.props.home}>Content</h3>
                    </div>
                    <div className="links">
                        <h3 onClick={this.props.content}>Services</h3>
                    </div>
                </div>
                <div className="Section-Logo">
                    <p>TopView-0</p>
                </div>
            </div>
        );
    }
}

export default NavSection;