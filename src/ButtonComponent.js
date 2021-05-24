import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
class ChoiceComponent extends Component{
render(){
    return(
        <div className={this.props.event}>
            <Button variant="contained" color="primary">Find a Job</Button>
        </div>
    )
}
}
export default ChoiceComponent