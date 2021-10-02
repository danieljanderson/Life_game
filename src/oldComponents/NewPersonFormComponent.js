import { Component } from 'react';
import Employment from './Employment';
import Person from './Person';
const faker = require('faker');

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
      setParentState: this.props.onCreatePlayer,
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
    let newJob = new Employment();
    const supervisorFirstName = faker.name.firstName() + ' ';
    const supervisorLastName = faker.name.lastName();
    newPlayer.name = this.state.name;
    newPlayer.birthdate = this.state.birthdate;
    newPlayer.gender = this.state.gender;
    newPlayer.money = 1000;
    newPlayer.charisma = 10;
    newPlayer.feeling = 10;
    newPlayer.intelligence = 10;
    newPlayer.hobbies = this.state.hobbies;
    newPlayer.location = this.state.location;
    newPlayer.numberCar = 1;
    newJob.companyName = faker.company.companyName();
    newJob.supervisor = supervisorFirstName + supervisorLastName;
    newJob.jobTitle = faker.name.jobTitle();
    newJob.jobDuties = faker.lorem.sentences();
    newJob.payRate = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    newJob.location = this.state.location;
    newPlayer.currentJob = newJob;
    evt.preventDefault();
    console.log(newPlayer);
    // this sets the state for the new PersonFormComponent
    this.setState({ newPlayer });

    // this sends the data up to lifeGameComponent
    //this.state.setParentState({ player: newPlayer });
    this.state.setParentState(newPlayer);
  }
  render() {
    return (
      <div className="NewPersonFormComponent">
        <h1>Please fill out your Charactors information</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nameinput">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="birthdateinput">Birthdate: </label>
          <input
            type="date"
            name="birthdate"
            value={this.state.birthdate}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="genderinput">Gender: </label>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="hobbiesinput">Name one Hobbie:</label>
          <input
            type="text"
            name="hobbies"
            value={this.state.hobbies}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="locationinput">Location: </label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default NewPersonFormComponent;
