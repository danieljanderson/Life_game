import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
class ChoiceComponent extends Component{
render(){
    return(
        <div className="button">
            <Button variant="contained" color="primary">{this.props.buttonName}</Button>
        </div>
    )
}
}
export default ChoiceComponent