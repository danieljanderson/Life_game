// this will have all the button components in them
import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import JobActionComponent from './JobActionComponent';
import FriendActionComponent from './FriendActionComponent';
import PersonActionComponent from './PersonActionComponent';
import './ChoiceComponent.css';

class ChoiceComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ChoiceComponent">
        <ButtonComponent
          className="jobChoice"
          buttonName="Job Choice"
        ></ButtonComponent>
        <ButtonComponent
          className="friendChoice"
          buttonName="Friend Choice"
        ></ButtonComponent>
        <ButtonComponent
          className="personChoice"
          buttonName="Person Choice"
        ></ButtonComponent>
        [// TODO HIDE THESE COMPONENTS SO THEY ONLY SHOW UP WHEN YOU CLICK THE
        ABOVE BUTTONS.]
        <JobActionComponent></JobActionComponent>
        <FriendActionComponent></FriendActionComponent>
        <PersonActionComponent
          player={this.props.player}
          onPlayerChoice={this.props.onPlayerChoice}
        ></PersonActionComponent>
      </div>
    );
  }
}
export default ChoiceComponent;
