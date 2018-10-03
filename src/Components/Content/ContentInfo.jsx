import React from 'react';
import Social from "../Extras/SocialMedia.jsx";

//Tiles
import About from "./Tiles/About.jsx";
import Feature from "./Tiles/Feature.jsx";
import Interview from "./Tiles/Interview.jsx";
import OtherBrand from "./Tiles/OtherBrands.jsx";
import PersonalBrand from "./Tiles/PersonalBrand.jsx";
import Podcast from "./Tiles/Podcast.jsx";

//Covers
import Cover from "../../img/covers/topViewCover3.jpg";
import Cover1 from "../../img/covers/topViewCover8.jpg";
import Cover2 from "../../img/covers/topViewCover6.jpg";
import Cover3 from "../../img/covers/topViewCover7.jpg";
import Cover4 from "../../img/covers/topViewCover5.jpg";
import Cover5 from "../../img/covers/topViewCover2.jpg";

export const ContentInfo = [
    {
        Pic: Cover,
        Name: "Feature",
        Section: <Feature />
    },
    {
        Pic: Cover1,
        Name: "Personal Brands",
        Section: <PersonalBrand />
    },
    {
        Pic: Cover2,
        Name: "Other Brands",
        Section: <OtherBrand />
    },
    {
        Pic: Cover3,
        Name: "Podcasts",
        Section: <Podcast />
    },
    {
        Pic: Cover4,
        Name: "Interviews",
        Section: <Interview />
    },
    {
        Pic: Cover5,
        Name: "About",
        Section: <About />
    }
];

export const Tiles = (props) => {
    let styleOutline = {
        backgroundImage: "url(" + props.cover + ")",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className="col-lg-4 col-md-4 text-center content" style={styleOutline}>
            <div className="feat text-center" onClick={props.load}>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
};

export const Brands = (props) => {
    let styleOutline = {
        backgroundImage: "url(" + props.cover + ")",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 0px 25px rgba(92, 189, 234, 0.2)"
    };
    
    let outline = {
        padding: "20px 15px"
    };

    let feat = {
        transition: ".4",
        backgroundColor: "rgba(0, 0, 0, 0.15)",
        height: "100%"
    };

    return (
        <div className="col-lg-3 col-md-3" style={outline}>
            <div className=" text-center outline" style={styleOutline}>
                <div className="feat text-center" style={feat} onClick={props.load}>
                    
                </div>
            </div>
            <h3>{props.name}</h3>
        </div>
    );
};

export const Categories = (props) => {
    return  <div className="Brands-Catergory row">
                <div className="Brands-Header">
                    <h2>{props.name}</h2>
                </div>
                <div className="Brands-Data">
                    {props.data}
                </div>
                <br />
            </div>
};

export const Home = (props) => {
        return  <div className="container Tile text-center">
                    <div className="Tile-Header">
                        <h1>Content</h1>
                    </div>
                    <div className="Tile-Data">
                        {props.data}
                    </div>
                </div>
    
}

export const Article = props => {
    const { title, player, text, back } = props;
    return (
        <div className="Article">
            <div className="Article-Title"><h2 style={{ color: "white" }}>{title}</h2></div>
            <div className="Article-Data">
                <div className="Article-Player">{player}</div>
                <div className="Article-Text"><p>{text}</p></div>
                <div className="Article-Social">
                    <Social Class="Social-Article" />
                </div>
                <button onClick={back} className="Home-Data-Btn">Go Back</button>
            </div>
        </div>
    )
};