import React, {Component} from 'react';
import './PersonComponent.css'
//import Person from './Person'

class PersonComponent extends Component{
    render(){
        return(
            <div className = "PersonComponent">
                <div className="PersonComponent-name">
                    <h1>Name: {this.props.name}</h1>
                </div>
                <div className="PersonComponent-birthdate">
                    <p>Birthday: {this.props.birthdate}</p>
                </div>
                <div className="PersonComponent-gender">
                    <p>Gender: {this.props.gender}</p>
                </div>
                <div className="PersonComponent-money">
                    <p>Money: {this.props.money}</p>
                </div>
                <div className="PersonComponent-charisma">
                    <p>Charisma: {this.props.charisma}</p>
                </div>
                <div className="PersonComponent-feeling">
                    <p>Feeling: {this.props.feeling}</p>
                </div>
                <div className="PersonComponent-intelligence">
                    <p>Intelligence: {this.props.intelligence}</p>
                </div>
                <div className="PersonComponent-hobbies">
                    <p>Hobbies: {this.props.hobbies}</p>
                </div>
                <div className="PersonComponent-location">
                    <p>Location: {this.props.location}</p>
                </div>
                <div className="PersonComponent-currentJob">
                    <p>Current Job: {this.props.currentJob}</p>
                </div>
                <div className="PersonComponent-employmentHistory">
                    <p>Employment History: {this.props.employmentHistory}</p>
                </div>
                <div className="PersonComponent-car">
                    <p>Owns a Car: {this.props.car}</p>
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