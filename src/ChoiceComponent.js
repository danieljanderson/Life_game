// this will have all the button components in them
import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'
import './ChoiceComponent.css'

class ChoiceComponent extends Component{

    render(){
        return(
            <div className="ChoiceComponent">
                <ButtonComponent className="jobChoice" buttonName= "Job Choice"></ButtonComponent>
                <ButtonComponent className="friendChoice" buttonName= "Friend Choice"></ButtonComponent>
                <ButtonComponent className="personChoice" buttonName="Person Choice"></ButtonComponent>
            </div>
        )
    }
}
export default ChoiceComponent