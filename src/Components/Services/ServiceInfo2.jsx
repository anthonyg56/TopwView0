import React from "react";

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
        Name: "Packages",
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

export const Tiles = (props) => {
    let styleOutline = {
        backgroundImage: "url(" + props.cover + ")",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div className="col-lg-6 col-md-6 text-center content" style={styleOutline}>
            <div className="feat text-center" onClick={props.load}>
                <h3>{props.name}</h3>
            </div>
        </div>
    );
};