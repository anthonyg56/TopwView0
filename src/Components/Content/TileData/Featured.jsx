import React from "react";

const video = <iframe
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/N2-dqe8qweY?controls=0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
/>;

const Features = [
    {
        Name: "Sam",
        Bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Player: video,
        Pic: require("../../../img/covers/topViewCover4.jpg")
    },
    {
        Name: "Chad",
        Bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Player: video,
        Pic: require("../../../img/covers/topViewCover6.jpg")
    },
    {
        Name: "Brayden",
        Bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Player: video,
        Pic: require("../../../img/covers/topViewCover2.jpg")
    }
];

export default Features;