// this will have all the button components in them
import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'

class ChoiceComponent extends Component{

    render(){
        return(
            <div className="ChoiceComponent">
                <ButtonComponent event="getAJob">Get a Job</ButtonComponent>
            </div>
        )
    }
}
export default ChoiceComponent