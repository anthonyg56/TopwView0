import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//Service
import Photography from "./Photography.jsx";
import Packages from "./Packages.jsx";
import Cinema from "./Cinema.jsx";
import WebDev from "./WebDevelopment.jsx";

//Icons
import Monitor from "./svg/012-computer.svg";
import PhotoCam from "./svg/004-photo-camera.svg";
import VideoCam from "./svg/003-super-8.svg";
import Box from "./svg/002-box.svg";

//Backgrounds
import Photo from "../../img/covers/topViewStudio.jpg"

export const ServiceInfo = [
    {
        Name: "Photography",
        ID: 0,
        Icon: PhotoCam,
        Data: Photography,
        Rundown: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        Description: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        ],
        Levels: [
            {
                name: "Silver",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Gold",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Platinum",
                Criteria: ["text", "text", "text", "text"]
            }
        ]
    },
    {
        Name: "Cinematography",
        ID: 1,
        Icon: VideoCam,
        Data: Cinema,
        Rundown: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        Description: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        ],
        Levels: [
            {
                name: "Silver",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Gold",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Platinum",
                Criteria: ["text", "text", "text", "text"]
            }
        ]
    },
    {
        Name: "Web-Development",
        ID: 2,
        Icon: Monitor,
        Data: WebDev,
        Rundown: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        Description: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        ],
        Levels: [
            {
                name: "Silver",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Gold",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Platinum",
                Criteria: ["text", "text", "text", "text"]
            }
        ]
    },
    {
        Name: "Photography",
        ID: 3,
        Icon: Box,
        Data: Packages,
        Rundown: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ],
        Description: [
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        ],
        Levels: [
            {
                name: "Silver",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Gold",
                Criteria: ["text", "text", "text", "text"]
            },
            {
                name: "Platinum",
                Criteria: ["text", "text", "text", "text"]
            }
        ]
    }
];

export const HomeDisplay = props => {
    let { flip, index, photo, cinema, web, pack } = props;
    var time = 400;
    var text = ServiceInfo[0].Rundown;
    var text1 = ServiceInfo[1].Rundown;
    var text2 = ServiceInfo[2].Rundown;
    var text3 = ServiceInfo[3].Rundown;
    let styleOutline = {
        backgroundImage: "url(" + Photo + ")",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    /*var display = [
        [
            Photos,
            <div className="text-center">
                {text.map((e, key) => {
                    return <p id={key}>{e}</p>;
                })}
            </div>
        ],
        [
            Photos,
            <div className="text-center">
                {text1.map((e, key) => {
                    return <p id={key}>{e}</p>;
                })}
            </div>
        ],
        [
            Photos,
            <div className="text-center">
                {text2.map((e, key) => {
                    return <p id={key}>{e}</p>;
                })}
            </div>
        ],
        [
            <img src={Box} alt="icon" id={3} onClick={pack} />,
            <div className="text-center">
                {text3.map((e, key) => {
                    return <p id={key}>{e}</p>;
                })}
            </div>
        ]
    ];*/

    return (
        <div className="Icons container">
            {ServiceInfo.map((e, key) => {
                time = +350;
                return (
                    <div className="col-lg-6 col-md-6 col-sm-6" style={styleOutline} >
                        {/*<TransitionGroup className="TransitionBox" appear id={key}>
                            <CSSTransition
                                timeout={time}
                                key={index}
                                classNames="Services-box Display"
                            >
                                {display[key][index]}
                            </CSSTransition>
                </TransitionGroup>*/}
                        <h2>{e.Name}</h2>
                    </div>
                );
            })}
            <button onClick={flip}>Learn More</button>
        </div>
    );
};

export const Photos = () => {
    let Silver = ServiceInfo[0].Levels[0].Criteria;
    let Gold = ServiceInfo[0].Levels[1].Criteria;
    let Platinum = ServiceInfo[0].Levels[2].Criteria;
    let Description = ServiceInfo[0].Description;
    let Name = ServiceInfo[0].Name;

    return (
        <div className="Service-Card container">
            <div className="Description col-lg-7 col-md-7 col-sm-7">
                <h2>{Name}</h2>
                <div className="text-left">
                    {Description.map((e, key) => {
                        return <p id={key}>-{e}</p>;
                    })}
                </div>
            </div>
            <div className="Criteria col-lg-5 col-md-5 col-sm-5 container">
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Silver">
                    <h3>Silver</h3>
                    <ul>
                        {Silver.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Gold">
                    <h3>Gold</h3>
                    <ul>
                        {Gold.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Platinum">
                    <h3>Platinum</h3>
                    <ul>
                        {Platinum.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
            </div>
        </div>
    );
};

export const Videos = () => {
    let Silver = ServiceInfo[1].Levels[0].Criteria;
    let Gold = ServiceInfo[1].Levels[1].Criteria;
    let Platinum = ServiceInfo[1].Levels[2].Criteria;
    let Description = ServiceInfo[1].Description;
    let Name = ServiceInfo[1].Name;

    return (
        <div className="Service-Card container">
            <div className="Description col-lg-7 col-md-7 col-sm-7">
                <h2>{Name}</h2>
                <div className="text-left">
                    {Description.map((e, key) => {
                        return <p id={key}>-{e}</p>;
                    })}
                </div>
            </div>
            <div className="Criteria col-lg-5 col-md-5 col-sm-5 container">
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Silver">
                    <h3>Silver</h3>
                    <ul>
                        {Silver.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Gold">
                    <h3>Gold</h3>
                    <ul>
                        {Gold.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Platinum">
                    <h3>Platinum</h3>
                    <ul>
                        {Platinum.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
            </div>
        </div>
    );
};

export const Web = () => {
    let Silver = ServiceInfo[2].Levels[0].Criteria;
    let Gold = ServiceInfo[2].Levels[1].Criteria;
    let Platinum = ServiceInfo[2].Levels[2].Criteria;
    let Description = ServiceInfo[2].Description;
    let Name = ServiceInfo[2].Name;

    return (
        <div className="Service-Card container">
            <div className="Description col-lg-7 col-md-7 col-sm-7">
                <h2>{Name}</h2>
                <div className="text-left">
                    {Description.map((e, key) => {
                        return <p id={key}>-{e}</p>;
                    })}
                </div>
            </div>
            <div className="Criteria col-lg-5 col-md-5 col-sm-5 container">
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Silver">
                    <h3>Silver</h3>
                    <ul>
                        {Silver.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Gold">
                    <h3>Gold</h3>
                    <ul>
                        {Gold.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Platinum">
                    <h3>Platinum</h3>
                    <ul>
                        {Platinum.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                    <h4>Price</h4>
                </div>
            </div>
        </div>
    );
};

export const Pack = () => {
    let Silver = ServiceInfo[3].Levels[0].Criteria;
    let Gold = ServiceInfo[3].Levels[1].Criteria;
    let Platinum = ServiceInfo[3].Levels[2].Criteria;
    let Description = ServiceInfo[3].Description;
    let Name = ServiceInfo[3].Name;

    return (
        <div className="Service-Card container">
            <div className="Description col-lg-7 col-md-7 col-sm-7">
                <h2>{Name}</h2>
                <div className="text-left">
                    {Description.map((e, key) => {
                        return <p id={key}>-{e}</p>;
                    })}
                </div>
            </div>
            <div className="Criteria col-lg-5 col-md-5 col-sm-5 container">
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Silver">
                    <h3>Silver</h3>
                    <ul>
                        {Silver.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Gold">
                    <h3>Gold</h3>
                    <ul>
                        {Gold.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                </div>
                <div className="Info col-lg-4 col-md-4 col-sm-4" id="Platinum">
                    <h3>Platinum</h3>
                    <ul>
                        {Platinum.map((e, key) => {
                            return <li id={key}>{e}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
