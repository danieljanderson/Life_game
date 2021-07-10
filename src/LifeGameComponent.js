import React,{Component} from 'react'
import './LifeGameComponent.css'
import PersonComponent from './PersonComponent'
import ChoiceComponent from './ChoiceComponent'

class LifeGameComponent extends Component{
    static defaultProps ={
        name:"Charisse",
        birthdate: "6/12/1990",
        gender: "Male",
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
        this.state={}
    }

    render(){
        return(
        <div className="LifeGameComponent">
            <PersonComponent 
                name={this.props.name}
                birthdate={this.props.birthdate}
                gender={this.props.gender}
                money={this.props.money}
                charisma={this.props.charisma}
                feeling={this.props.feeling}
                intelligence={this.props.intelligence}
                hobbies={this.props.hobbies}
                location={this.props.location}
                currentJob={this.props.currentJob}
                employmentHistory={this.props.currentJob}
                car={this.props.car ? "Yes": "No"}
            />
            <ChoiceComponent></ChoiceComponent>
            
        </div>
        )
    }
}
export default LifeGameComponent