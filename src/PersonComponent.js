import React, { Component } from 'react';
import './PersonComponent.css';

class PersonComponent extends Component {
  render() {
    return (
      <div className="PersonComponent">
        <div className="PersonComponent-name">
          <h1>Name: {this.props.player.name}</h1>
        </div>
        <div className="PersonComponent-birthdate">
          <p>Birthday: {this.props.player.birthdate}</p>
        </div>
        <div className="PersonComponent-gender">
          <p>Gender: {this.props.player.gender}</p>
        </div>
        <div className="PersonComponent-money">
          <p>Money: {this.props.player.money}</p>
        </div>
        <div className="PersonComponent-charisma">
          <p>Charisma: {this.props.player.charisma}</p>
        </div>
        <div className="PersonComponent-feeling">
          <p>Feeling: {this.props.player.feeling}</p>
        </div>
        <div className="PersonComponent-intelligence">
          <p>Intelligence: {this.props.player.intelligence}</p>
        </div>
        <div className="PersonComponent-hobbies">
          <p>Hobbies: {this.props.player.hobbies}</p>
        </div>
        <div className="PersonComponent-location">
          <p>Location: {this.props.player.location}</p>
        </div>
        <div className="PersonComponent-currentJob">
          <p>Current Job: {this.props.player.currentJob}</p>
        </div>
        <div className="PersonComponent-employmentHistory">
          <p>Employment History: {this.props.player.employmentHistory}</p>
        </div>
        <div className="PersonComponent-car">
          <p>Owns a Car: {this.props.player.numberCar}</p>
        </div>
      </div>
    );
  }
}
export default PersonComponent;
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
