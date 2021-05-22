import React, {Component} from 'react';
import './PersonComponent.css'
//import Person from './Person'

class PersonComponent extends Component{
    render(){
        return(
            <div className = "PersonComponent">
                <div className="PersonComponent-name">
                    <h1>{this.props.name}</h1>
                </div>
                <div className="PersonComponent-birthdate">
                    <p>{this.props.birthdate}</p>
                </div>
                <div className="PersonComponent-gender">
                    <p>{this.props.gender}</p>
                </div>
                <div className="PersonComponent-money">
                    <p>{this.props.money}</p>
                </div>
                <div className="PersonComponent-charisma">
                    <p>{this.props.charisma}</p>
                </div>
                <div className="PersonComponent-feeling">
                    <p>{this.props.feeling}</p>
                </div>
                <div className="PersonComponent-intelligence">
                    <p>{this.props.intelligence}</p>
                </div>
                <div className="PersonComponent-hobbies">
                    <p>{this.props.hobbies}</p>
                </div>
                <div className="PersonComponent-location">
                    <p>{this.props.location}</p>
                </div>
                <div className="PersonComponent-currentJob">
                    <p>{this.props.currentJob}</p>
                </div>
                <div className="PersonComponent-employmentHistory">
                    <p>{this.props.employmentHistory}</p>
                </div>
                <div className="PersonComponent-car">
                    <p>{this.props.car}</p>
                </div>
                
            </div>
        )
    }
}
export default PersonComponent
/*name,
birthdate,
gender,
money,
charisma,
feeling,
intelligence,
hobbies,
location,
currentJob,
employmentHistory,
car
*/