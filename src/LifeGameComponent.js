import React,{Component} from 'react'
import './LifeGameComponent.css'
import PersonComponent from './PersonComponent'
import ChoiceComponent from './ChoiceComponent'
import NewPersonFormComponent from './NewPersonFormComponent'

class LifeGameComponent extends Component{
    static defaultProps ={
        name:"Charisse",
        birthdate: "6/12/1990",
        gender: "Male",
        // the below need to be added to state because they change.  HOwever they will probably be coming into this component as props.
        money:1000,
        charisma:30,
        feeling:50,
        intelligence:100,
        hobbies:["Golf","Coding","Board Games"],
        location:"Cleveland Ohio",
        currentJob:"unemployed",
        employmentHistory:["State Farm","AutoZone"],
        car:true
    }
    constructor(props){
        super(props)
        this.state={
            money:1000,
            charisma:10,
            feeling:10,
            intelligence:10,
            hobbies:[],
            location:"",
            currentJob:"",
            employmentHistory:[],
            car:true

        }
    }
    // I AM going to need help getting form data from this form
    render(){
        return(
        <div className="LifeGameComponent">
            <NewPersonFormComponent></NewPersonFormComponent>
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