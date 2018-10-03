import React from "react";
import Social from "../Extras/SocialMedia.jsx";
import Features from "../Content/TileData/Featured.jsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "../../scss/style.css";

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
          id={props.key}
          
        >

        </div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );

  return data;
};

const FeaturedArticle = props => {

  let data = (
    <div className="Article">
      <div className="Article-Title"><h2>{props.title}</h2></div>
      <div className="Article-Data">
        <div className="Article-Player">{props.player}</div>
        <div className="Article-Text"><p>{props.text}</p></div>
        <button onClick={props.back} className="Home-Data-Btn">Go Back</button>
        <div className="Article-Social">
          <Social />
        </div>
      </div>
      
    </div>
  );

  return data;
};

const Display = (props) => {
  return <TransitionGroup  className="container">
          <CSSTransition key={props.data.ID} timeout={{ enter: 500, exit: 500 }} classNames="Feat-Transition Feat-Home" >
            {props.data.Data}
          </CSSTransition>
        </TransitionGroup>
}

class Featured extends React.Component {
  loadArticle = (x) => {
    this.props.remove();
    let data = Features[x];
    let art = <div className="container"><FeaturedArticle title={data.Name} player={data.Player} text={data.Bio} back={() => this.back()} /></div>;
    this.setState({
      Article: art,
      POS: 1,
      Title: null
    })
  }

  back = () => {
    this.props.set();
    this.setState({
      Article: null,
      POS: 0,
      Title: <h2 className="row Home-Data-Label" style={{paddingTop: "25px"}}>- Featured Brands -</h2>
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      Article: null,
      POS: 0,
      Title: <h2 className="row Home-Data-Label" style={{paddingTop: "25px"}}>- Featured Brands -</h2>
    }
  }

  render() {
    const { Article, POS, Title } = this.state;
    let Cover = <div>
                  {Features.map((element, index) => {
                    return <FeaturedCover background={element.Pic} name={element.Name} handle={() => this.loadArticle(index)} key={index} />
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

export default Featured