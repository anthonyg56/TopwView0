import React from "react";
import {HomeDisplay, Photos, Videos, Web, Pack} from "./ServiceInfo.jsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Services extends React.Component {
    loadServices = x => {
        this.props.showBack();
        this.setState({
            Index: x
        });
    }

    learnMore = () => {
        let index = this.state.Flip;
        this.setState({
            Flip: (index === 0) ? 1 : 0
        });
    }

    state = {
        Flip: 0,
        Index: 0
    }

    render() {
        const { Flip, Index } = this.state;
        let ServiceSections = [
            <HomeDisplay load={null/*Change to switch when shit finally works*/} index={Flip} flip={() => this.learnMore()} photo={() => this.loadServices(1)} cinema={() => this.loadServices(2)} web={() => this.loadServices(3)} package={() => this.loadServices(4)}/>,
            <Photos/>,
            <Videos/>,
            <Web />,
            <Pack />
        ];
        return (
            <div className="Services text-center">
                <h1>Services</h1>
                {/*<TransitionGroup>
                <CSSTransition>*/}
                        {ServiceSections[Index]}
                    {/*</CSSTransition>
                    </TransitionGroup>*/}
            </div>
        );
    }
}

export default Services;
