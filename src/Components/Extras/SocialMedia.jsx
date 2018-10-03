import * as React from 'react';

//Social Media Icons
import FacebookArtist from '../../img/icons/white2/png/twitter1.png';
import InstagramArtist from '../../img/icons/white2/png/instagram1.png';
import TwitterArtist from '../../img/icons/white2/png/facebook1.png';
import YoutubeArtist from '../../img/icons/white2/png/youtube1.1.png';

class Social extends React.Component{
    constructor(props){
        super(props);
    }
	render(){
        let socialStyle = {
            padding: "0",
            margin: "0",
            
        }
        const {Class} = this.props;
		return(
            <div style={socialStyle}>
                <ul className={Class} style={{listStyle: "none"}}>
                    <li><a href="twitter.com"><img alt="Twitter Profile" src={TwitterArtist}/><span>Twitter</span></a></li>
                    <li><a href="facebook.com"><img alt="Facebook Profile" src={FacebookArtist}/><span>Facebook</span></a></li>
                    <li><a href="Youtube.com"><img alt="Youtube Profile" src={YoutubeArtist}/><span>Youtube</span></a></li>
                    <li><a href="Instagram.com"><img alt="Instagram Profile" src={InstagramArtist}/><span>Instagram</span></a></li>
                 </ul>
            </div>
        );
	}
}

export default Social;