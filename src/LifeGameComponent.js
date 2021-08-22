import React,{Component} from 'react'
import './LifeGameComponent.css'
import PersonComponent from './PersonComponent'
import Person from './Person'
import ChoiceComponent from './ChoiceComponent'
import NewPersonFormComponent from './NewPersonFormComponent'

class LifeGameComponent extends Component{
    
    constructor(props){
        super(props)
        this.state={

        }
        this.setState = this.setState.bind(this)
    }
    // I AM going to need help getting form data from this form
    render(){
        return(
        <div className="LifeGameComponent">
            <NewPersonFormComponent
        
              functionName={this.setState}
            ></NewPersonFormComponent>
            <PersonComponent 
                name={this.state.name}
                birthdate={this.state.birthdate}
                gender={this.state.gender}
                money={this.state.money}
                charisma={this.state.charisma}
                feeling={this.state.feeling}
                intelligence={this.state.intelligence}
                hobbies={this.state.hobbies}
                location={this.state.location}
                currentJob={this.state.currentJob}
                employmentHistory={this.state.currentJob}
                car={this.state.car ? "Yes": "No"}
            />
            
            <ChoiceComponent></ChoiceComponent>
            
            
        </div>
        )
    }
}
export default LifeGameComponent