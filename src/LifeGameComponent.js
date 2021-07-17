import React,{Component} from 'react'
import './LifeGameComponent.css'
import PersonComponent from './PersonComponent'
import ChoiceComponent from './ChoiceComponent'

class LifeGameComponent extends Component{
    static defaultProps ={
        name:"Charisse",
        birthdate: "6/12/1990",
        gender: "Male",
        // the below need to be added to state because they change
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
            money:100000,
            charisma:50,
            feeling:50,
            intelligence:50,
            hobbies:[],
            location:"",
            currentJob:"",
            employmentHistory:[],
            car:true

        }
    }

    render(){
        return(
        <div className="LifeGameComponent">
            <PersonComponent 
                name={this.props.name}
                birthdate={this.props.birthdate}
                gender={this.props.gender}
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