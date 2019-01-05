import React , {Component} from 'react';
import ReactDom from 'react-dom';
import LeftNav from './components/LeftNav';
// import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <div>
             <LeftNav/>
            </div>
        )
    }
}

// Render the Content

ReactDom.render(<App/>,document.getElementById('root'));