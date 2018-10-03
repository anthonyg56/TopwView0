import React from "react";
import OtherBrands from "../TileData/OtherBrands.jsx";
import {Categories, Brands} from "../ContentInfo.jsx";

class Interview extends React.Component{
    loadBrands = () => {
        let data = OtherBrands.map((element, key) => {
            let individuals = OtherBrands[key].Artist;
            let brands = individuals.map((y, i) => { return <Brands cover={y.Pic} name={y.Name} load={null} />; });
            return <Categories data={brands} name={element.Name}/>;
        });

        return  <div className="Brands container">
                    {data}
                </div>
    }

    constructor(props){
        super(props);
        this.state = {
            Data: null,
            Fade: true
        }
    }

    componentWillMount(){
        this.setState({
            Data: this.loadBrands()
        })
    }

    render(){
        let style = {
            fontFamily: "Unica one",
            fontSize: "7em",
            color: "white",
            letterSpacing: "2px"
        };
        return(
            <div>
                <h1 style={style}>Other Brands</h1>
                {this.state.Data}
            </div>
        );
    }
}

export default Interview;