import React , {Component} from 'react';

class About extends Component{
    render(){
        return(
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                    <h1 className="mb-0">Shobhit
                        <span className="text-primary">Srivastav</span>
                    </h1>
                    <div className="subheading mb-5">Gurgaon · 9821559558 ·
                        <a href="mailto:shobhit833@gmail.com">shobhit833@gmail.com</a>
                    </div>
                    <p className="lead mb-5">A Complete IT Professional Having 7+ Years of experience involved in Complete Life cycle of Software Development. Right mix of skills in product development and Service based Companies.
.</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/coonect2shobhit/">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/visit2shobhit">
                        <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/shobhit833">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/connect2shobhit">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;