import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'
//import Event from './Event'
import Person from './Person'
//import Employment from './Employment'
import './JobActionComponent.css'
 

class JobActionComponent extends Component{

    constructor(props) {
        super(props);
        this.createPerson = this.createPerson.bind(this);
      }
    createPerson(){
        const personDetails = [
            'Daniel',
            'June,4',
            'Male',
            10,
            50,
            //feelings
            45,
            //intelligence
            100,
            ['golf', 'board_games'],
            'Strongsville',
            'state farm',
            ['self'],
            1,
          ]
        const newPerson = new Person(...personDetails)
        
        return newPerson
    }
    

    render(){
        return(
            <div className="JobActionComponent">
                [//TODO there will be alot more buttons other than this]
                <h1>{this.createPerson()}</h1>
                <ButtonComponent className="GoToWork" buttonName= "Go to Work"></ButtonComponent>
               
            </div>
        )
    }
}
export default JobActionComponent