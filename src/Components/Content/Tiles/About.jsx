import React from "react";
//import {CSSTransition} from 'react-transition-group';
import "./animate.css";

const Statement = () => {

    return (<div className="container">
                <span className="animated fadeIn delay-1s slower"><p>At the end of your journey life is about the impact that you leave behind and the memories that
                    you created.</p></span>
                <span className="animated fadeIn delay-2s slower"><p>We have chosen to use our voice and platform to help other brands,
                    creatives, and innovators who seek to make a positive change in the world.</p></span>
                <span className="animated fadeIn delay-3s slower"><p>Here at TopView0, we are inspired to inspire others to pursue their passion, and live
                    a free and memorable life.</p></span>
                <span className="animated fadeIn delay-4s slower"><p>We are doing this by
                    creating and establishing a social presence and influence for our clients through social media and
                    content branding.</p></span>
            </div>)
}

class About extends React.Component {

    render() {
        return (<div className="Statement container">
                    <Statement />
                </div>
                
        );
    }
}

export default About;