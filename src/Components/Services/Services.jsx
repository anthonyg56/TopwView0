import React from "react";
import {HomeDisplay, Photos, Videos, Web, Pack} from "./ServiceInfo.jsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Info = [
    Photos,
    Videos,
    Web,
    Pack
];

class Services extends React.Component {
    loadServices = (x) => {
        let data = Info[x];
        this.setState({
            Data: data
        });
        this.props.switchContent();
        this.props.showBack();
    }

    /*learnMore = () => {
        let index = this.state.Flip;
        this.setState({
            Flip: (index === 0) ? 1 : 0
        });
    }

    state = {
        Flip: 0,
        Index: 0
    }*/

    constructor(props){
        super(props);
        this.state = {
            Data: null
        }
    }

    render() {
        const { Data } = this.state;
        let ServiceSections = [
            <HomeDisplay photo={() => this.loadServices(0)} cinema={() => this.loadServices(1)} web={() => this.loadServices(2)} package={() => this.loadServices(3)} />,
            Data
        ];
        return (
            <div className="Services text-center">
                <h1>Services</h1>
                <TransitionGroup>
                <CSSTransition
                    key={this.props.pos}
                    classNames="Slide Slide"
                    timeout={400}
                >
                        {ServiceSections[this.props.pos]}
                    </CSSTransition>
                    </TransitionGroup>
            </div>
        );
    }
}

export default Services;
