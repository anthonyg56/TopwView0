import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './Components/Home/Home.jsx';


class Splash extends React.Component{
    enter = () => {
        this.setState({
            Data: <App />
        })
    }

    state = {
        Data: <App />
    }

    render(){
        const {Data} = this.state;

        return Data;
    }
}

ReactDOM.render(<Splash />, document.getElementById('root'));
registerServiceWorker();
