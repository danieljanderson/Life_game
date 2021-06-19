import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'
import './PersonActionComponent.css'

class PersonActionComponent extends Component{

    render(){
        return(
            <div className="PersonActionComponent">
                <ButtonComponent className="BuyACar" buttonName= "Buy A Car"></ButtonComponent>
               
            </div>
        )
    }
}
export default PersonActionComponent