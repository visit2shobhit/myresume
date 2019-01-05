import React , {Component} from 'react';

class Education extends Component {
    render(){
        return(
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <div className="my-auto">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                        <h3 className="mb-0">Uttar Pradesh Technical University</h3>
                        <div className="subheading mb-3">Bachelor of Technology</div>
                        <div>Computer Science</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary">May 2005 - May 2009</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                        <h3 className="mb-0">UP Board</h3>
                        <div className="subheading mb-3">12th</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary">Year 2004</span>
                        </div>
                    </div>
                    <div className="resume-item d-flex flex-column flex-md-row">
                        <div className="resume-content mr-auto">
                        <h3 className="mb-0">UP Board</h3>
                        <div className="subheading mb-3">10th</div>
                        </div>
                        <div className="resume-date text-md-right">
                        <span className="text-primary">Year 2002</span>
                        </div>
                    </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Education;