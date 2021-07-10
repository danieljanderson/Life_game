import React,{Component} from "react"
import LifeGameComponent from "./LifeGameComponent";
import './App.css';




class App extends Component {
  render(){
    return (
      <div className="App">
        <LifeGameComponent></LifeGameComponent>
      </div>
    );
  }
}

export default App;

