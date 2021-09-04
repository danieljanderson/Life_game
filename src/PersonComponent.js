import React, { Component } from 'react';
import './PersonComponent.css';

class PersonComponent extends Component {
  constructor(props) {
    super(props);
    this.player = this.props.player;
  }
  render() {
    return (
      <div className="PersonComponent">
        <div className="PersonComponent-name">
          <h1>Name: {this.player.name}</h1>
        </div>
        <div className="PersonComponent-birthdate">
          <p>Birthday: {this.player.birthdate}</p>
        </div>
        <div className="PersonComponent-gender">
          <p>Gender: {this.player.gender}</p>
        </div>
        <div className="PersonComponent-money">
          <p>Money: {this.player.money}</p>
        </div>
        <div className="PersonComponent-charisma">
          <p>Charisma: {this.player.charisma}</p>
        </div>
        <div className="PersonComponent-feeling">
          <p>Feeling: {this.player.feeling}</p>
        </div>
        <div className="PersonComponent-intelligence">
          <p>Intelligence: {this.player.intelligence}</p>
        </div>
        <div className="PersonComponent-hobbies">
          <p>Hobbies: {this.player.hobbies}</p>
        </div>
        <div className="PersonComponent-location">
          <p>Location: {this.player.location}</p>
        </div>
        <div className="PersonComponent-currentJob">
          <p>Current Job: {this.player.currentJob}</p>
        </div>
        <div className="PersonComponent-employmentHistory">
          <p>Employment History: {this.player.employmentHistory}</p>
        </div>
        <div className="PersonComponent-car">
          <p>Owns a Car: {this.player.car}</p>
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
