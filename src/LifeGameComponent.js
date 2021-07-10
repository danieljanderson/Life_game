import React,{Component} from 'react'
import './LifeGameComponent.css'
import PersonComponent from './PersonComponent'
import ChoiceComponent from './ChoiceComponent'

class LifeGameComponent extends Component{
    static defaultProps ={
        name:"Daniel",
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

    render(){
        return(
        <div className="LifeGameComponent">
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
                car="yes"
            />
            <ChoiceComponent></ChoiceComponent>
            
        </div>
        )
    }
}
export default LifeGameComponent