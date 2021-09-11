import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import Person from './Person';
import Event from './Event';
import './PersonActionComponent.css';

class PersonActionComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selfStudy = this.selfStudy.bind(this);
  }
  selfStudy() {
    let tempPlayer = new Person();
    tempPlayer = this.props.player;
    tempPlayer = Event.selfStudy(tempPlayer);
    this.props.onPlayerChoice(tempPlayer);
  }
  handleClick() {
    this.selfStudy();
  }
  render() {
    return (
      <div className="PersonActionComponent">
        <ButtonComponent
          className="selfstudy"
          buttonName="Self Study"
          onClick={this.handleClick}
        ></ButtonComponent>
      </div>
    );
  }
}
export default PersonActionComponent;
