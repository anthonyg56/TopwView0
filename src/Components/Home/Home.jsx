import React from "react";
import "../../scss/style.css";

const Home = props => {
    return (
        <div className='Home-Header container text-center'>
            <div style={{ boxShadow: "0px 0px 55px rgba(92, 189, 234, 0.40)", margin: "30px auto" }}>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/N2-dqe8qweY?controls=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Example"
                />
            </div>
            <h2 onClick={props.Enter} >Click To enter</h2>
        </div>
    );
};

export default Home;