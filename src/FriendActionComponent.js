import React,{Component} from 'react'
import ButtonComponent from './ButtonComponent'
import './FriendActionComponent.css'

class FriendActionComponent extends Component{

    render(){
        return(
            <div className="FriendActionComponent">
                <ButtonComponent className="MakeAFriend" buttonName= "Make a Friend"></ButtonComponent>
                
            </div>
        )
    }
}
export default FriendActionComponent