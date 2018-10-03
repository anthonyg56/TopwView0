import React from "react";
import {Categories, Brands} from "../ContentInfo.jsx";
import PersonalBrands from "../TileData/PersonalBrand.jsx";

class PersonalBrand extends React.Component{
    Next = x => {
        let index = this.state.Index;
        let back = this.state.Back;
        this.setState({
            Index: (x === 0) ? (index + 1) : (index - 1),
            Back: ((index === 1) && (x === 1) && (back === 1)) ? 0 : 1,
            Next: ((index === 4) && (x === 0)) ? 0 : 1
        });
    }

    constructor(props){
        super(props);
        this.state = {
            Index: 0,
            Back: 0,
            Next: 1
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
        let individuals = PersonalBrands[Index].Artist;
        let brands = individuals.map((y, i) => { return <Brands cover={y.Pic} name={y.Name} load={null} />; });
        return(
            <div>
                <h1 style={style}>Personal Brands</h1>
                <div className="Brands container">
                    <Categories data={brands} name={PersonalBrands[Index].Name}/>
                    <div>
                        <h4 onClick={(e) => this.Next(1)} style={h4p[Back]} >Previous</h4>
                        <h4 onClick={(e) => this.Next(0)} style={h4n[Next]} >Next</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalBrand;