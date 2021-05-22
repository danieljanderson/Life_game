import React,{Component} from "react"
import PersonComponent from './PersonComponent'
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <PersonComponent 
        name="Daniel"
        birthdate="06/12/1990"
        gender="Male"
        money={1000}
        charisma={30}
        feeling={50}
        intelligence={100}
        hobbies={["Golf","Coding","Board Games"]}
        location="Cleveland Ohio"
        currentJob="unemployed"
        employmentHistory={["State Farm","AutoZone"]}
        car="yes"/>
      </div>
    );
  }
}

export default App;

