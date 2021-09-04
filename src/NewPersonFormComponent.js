import { Component } from 'react';
import Person from './Person';

class NewPersonFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.player.name,
      birthdate: this.props.player.birthdate,
      gender: this.props.player.gender,
      hobbies: this.props.player.hobbies,
      location: this.props.player.location,
      currentJob: this.props.player.currentJob,
      setParentState: this.props.functionName,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newPlayer = this.props.createPlayer;
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    let newPlayer = new Person();
    newPlayer.name = this.state.name;
    newPlayer.birthdate = this.state.birthdate;
    newPlayer.gender = this.state.gender;
    newPlayer.location = this.state.location;
    evt.preventDefault();
    console.log(newPlayer);
    // this sets the state for the new PersonFormComponent
    this.setState({ newPlayer });

    // this sends the data up to lifeGameComponent
    this.state.setParentState({ player: newPlayer });
  }
  render() {
    return (
      <div className="NewPersonFormComponent">
        <h1>Please fill out your Charactors information</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <input
            type="date"
            name="birthdate"
            value={this.state.birthdate}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="hobbies"
            value={this.state.hobbies}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            name="currentJob"
            value={this.state.currentJob}
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default NewPersonFormComponent;
