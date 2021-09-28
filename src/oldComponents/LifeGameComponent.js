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
    this.playerResults = this.playerResults.bind(this);
  }
  createPlayer(player) {
    this.setState({ player }, () => {
      console.log('this is after state change', this.state);
    });
  }
  playerResults(player) {
    this.setState({ player });
  }
  // I AM going to need help getting form data from this form
  render() {
    return (
      <div className="LifeGameComponent">
        <NewPersonFormComponent
          player={this.state.player}
          onCreatePlayer={this.createPlayer}
        ></NewPersonFormComponent>
        <PersonComponent player={this.state.player} />

        <ChoiceComponent
          player={this.state.player}
          onPlayerChoice={this.playerResults}
        ></ChoiceComponent>
      </div>
    );
  }
}
export default LifeGameComponent;
