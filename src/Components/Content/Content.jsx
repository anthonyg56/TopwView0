import React from "react";
import {ContentInfo, Tiles, Home} from "./ContentInfo.jsx";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Content extends React.Component {
    loadContent = (x) => {
        let data = ContentInfo[x].Section;
        this.setState({
            Data: data,
            POS: 1
        });
        this.props.showBack();
    }

    constructor(props) {
        super(props);
        this.state = {
            Data: null,
            POS: 0
        }
    }

    render() {
        const { Data, POS } = this.state;
        let tiles = ContentInfo.map((x, i) => { return <Tiles cover={x.Pic} name={x.Name} load={() => this.loadContent(i)} key={i} /> });
        let items = [
            {
                Content: <Home data={tiles}/>,
                ID: 0
            },
            {
                Content: Data,
                ID: 1
            }
        ];
        return (
            <div className="Content">
                <TransitionGroup>
                    <CSSTransition
                        key={items[POS].ID}
                        classNames="Slide Slide"
                        timeout={400}
                    >
                        {items[POS].Content}
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
};

export default Content;