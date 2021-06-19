import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'
import './JobActionComponent.css'

class JobActionComponent extends Component{

    render(){
        return(
            <div className="JobActionComponent">
                <ButtonComponent className="GoToWork" buttonName= "Go to Work"></ButtonComponent>
               
            </div>
        )
    }
}
export default JobActionComponent