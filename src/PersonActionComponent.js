import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import './PersonActionComponent.css';

class PersonActionComponent extends Component {
  render() {
    return (
      <div className="PersonActionComponent">
        <ButtonComponent
          className="selfstudy"
          buttonName="Self Study"
        ></ButtonComponent>
      </div>
    );
  }
}
export default PersonActionComponent;
