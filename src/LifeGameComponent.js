import React, { Component } from 'react';
import './LifeGameComponent.css';
import PersonComponent from './PersonComponent';
import Person from './Person';
import ChoiceComponent from './ChoiceComponent';
import NewPersonFormComponent from './NewPersonFormComponent';

class LifeGameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: new Person(),
    };
    this.createPlayer = this.createPlayer.bind(this);
  }
  createPlayer() {
    this.setState();
    console.log('this is after state change', this.state);
  }
  // I AM going to need help getting form data from this form
  render() {
    return (
      <div className="LifeGameComponent">
        <NewPersonFormComponent
          player={this.state.player}
          functionName={this.createPlayer}
        ></NewPersonFormComponent>
        <PersonComponent player={this.state.player} />

        <ChoiceComponent></ChoiceComponent>
      </div>
    );
  }
}
export default LifeGameComponent;
