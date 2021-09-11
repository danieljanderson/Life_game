import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class ButtonComponent extends Component {
  render() {
    return (
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.onClick}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}
export default ButtonComponent;
