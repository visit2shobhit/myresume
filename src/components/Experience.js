import React , {Component} from 'react';

class Experience extends Component {
    render(){
        return(
            <div>
               <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience"> 
               <div className="my-auto">
               <ul className="list-group">
                <li className="list-group-item"><h5>Front End Technologies : </h5> JavaScript, Jquery, ReactJS , Redux   </li>
                <li className="list-group-item"><h5>Back End Technologies : </h5> PHP, Laravel , Zend , Symfony, MVC Architecture </li>
                <li className="list-group-item"><h5>Databases : </h5> Mysql, Sql , NoSql(Mongo DB) </li>
               
               </ul>
               </div>
               </section>
            </div>
        )
    }
}

export default Experience;