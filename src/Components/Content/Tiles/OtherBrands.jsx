import React from "react";
import OtherBrands from "../TileData/OtherBrands.jsx";
import {Categories, Brands} from "../ContentInfo.jsx";

class OtherBrand extends React.Component{
    Next = x => {
        let index = this.state.Index;
        let back = this.state.Back;
        this.setState({
            Index: (x === 0) ? (index + 1) : (index - 1)
        });
    }

    constructor(props){
        super(props);
        this.state = {
            Index: 0
        }
    }

    render(){
        const {Index, Back, Next} = this.state;
        let style = {
            fontFamily: "Unica one",
            fontSize: "7.5em",
            color: "white",
            letterSpacing: "2px"
        };
        let h4p = [
            {
                display: "none"
            },
            {
                fontFamily: "Unica one",
                fontSize: "2.65em",
                color: "white",
                letterSpacing: "1px",
                display: "inline",
                paddingLeft: "25px",
                float: "left",
                margin: "20px auto"
            }
        ];
        let h4n = [
            {
                display: "none"
            },
            {
                fontFamily: "Unica one",
                fontSize: "2.65em",
                color: "white",
                letterSpacing: "1px",
                display: "inline",
                paddingRight: "25px",
                margin: "20px auto",
                float: "right"
            }
        ];
        let individuals = OtherBrands[Index].Artist;
        let brands = individuals.map((y, i) => { return <Brands cover={y.Pic} name={y.Name} load={null} />; });
        return(
            <div>
                <h1 style={style}>Other Brands</h1>
                <div className="Brands container">
                    <Categories data={brands} name={OtherBrands[Index].Name}/>
                    <div>
                        <h4 onClick={(e) => this.Next(1)} style={h4p[Back]} >Previous</h4>
                        <h4 onClick={(e) => this.Next(0)} style={h4n[Next]} >Next</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default OtherBrand;