import React , {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import About from './About';
import Experience from './Experience';
import Education from './Education';
class LeftNav extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                 <span className="d-block d-lg-none">Shobhit Srivastav</span>
                 <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link js-scroll-trigger active">About</Link>
                    </li>
                    <li className="nav-item">
                     <Link to="/experience" className="nav-link js-scroll-trigger active">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/education" className="nav-link js-scroll-trigger active">Education</Link>
                    </li>
                  
                    </ul>
                </div>
                </nav>
                <div className="container-fluid p-0">
                    <Route exact path="/" component={About}></Route> 
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/experience" component={Experience}></Route>
                    <Route exact path="/education" component={Education}></Route>
                    
            </div>
            </div>
            </BrowserRouter>
            
        )
    }
}


export default LeftNav;