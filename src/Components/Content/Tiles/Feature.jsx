import React from "react";
import {Article} from '../ContentInfo.jsx';
import Features from "../TileData/Featured.jsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const FeaturedCover = props => {
  let style = {
    backgroundImage: "url(" + props.background + ")",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "3px 5px 15px black"
  };

  let data = (
    <div className="col-lg-4 col-md-4 featured-cov">
      <div className=" text-center outline" style={style} onClick={props.handle}>
        <div
          className="feat text-center"
          id={props.k}
        >

        </div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );

  return data;
};

const Display = (props) => {
  return <TransitionGroup  className="container" style={{padding: "0"}}>
          <CSSTransition key={props.data.ID} timeout={{ enter: 500, exit: 500 }} classNames="Feat-Transition Feat-Home" >
            {props.data.Data}
          </CSSTransition>
        </TransitionGroup>
}

class Feature extends React.Component {
  loadArticle = (x) => {
    let data = Features[x];
    let art = <div className="container" style={{padding: "0"}}><Article title={data.Name} player={data.Player} text={data.Bio} back={() => this.back()} /></div>;
    this.setState({
      Article: art,
      POS: 1,
      Title: null
    })
  }

  back = () => {
    this.setState({
      Article: null,
      POS: 0,
      Title: <h2 className="row Home-Data-Label" style={{paddingTop: "25px"}}>Featured Brands</h2>
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      Article: null,
      POS: 0,
      Title: <h2 className="row Home-Data-Label" style={{paddingTop: "25px"}}>Featured Brands</h2>
    }
  }

  render() {
    const { Article, POS, Title } = this.state;
    let Cover = <div>
                  {Features.map((element, index) => {
                    return <FeaturedCover background={element.Pic} name={element.Name} handle={() => this.loadArticle(index)} k={index} />
                  })}
                </div>;
    let items = [
      {
        Data: Cover,
        ID: 0
      },
      {
        Data: Article,
        ID: 1
      }
    ];
    return (
      <div>
        {Title}
        <Display data={{...items[POS]}}/>
      </div>

    );
  }
}

export default Feature;