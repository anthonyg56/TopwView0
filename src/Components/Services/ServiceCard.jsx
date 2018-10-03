import React from 'react';

class ServicesCard extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        const {Service, Description, Silver, Gold, Platinum} = this.props;
        return(
            <div className="Services-Card container">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <h2>{Service}</h2>
                    <div className="Card-Description">
                        {Description.map((e, key) => {
                            return <p id={key}>{e}</p>
                        })}
                    </div>
                </div>
                <div className="Card-Info col-lg-6 col-md-6 col-sm-6 container">
                    <div className="col-lg-2 col-md-2 col-sm-2" id="Silver">
                        <h3>Silver</h3>
                        <ul>
                            {Silver.map((e, key) => {
                                return <li id={key}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id="Gold">
                        <h3>Gold</h3>
                        <ul>
                            {Gold.map((e, key) => {
                                return <li id={key}>{e}</li>
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" id="Platinum">
                        <h3>Platinum</h3>
                        <ul>
                            {Platinum.map((e, key) => {
                                return <li id={key}>{e}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesCard;