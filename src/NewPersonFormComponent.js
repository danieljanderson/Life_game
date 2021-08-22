import { Component } from "react"

class NewPersonFormComponent extends Component{
    constructor(props){
        super(props)
        this.state = { }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})

    }

    handleSubmit(evt){
        let name = this.state.name
        let birthdate = this.state.birthdate
        let gender = this.state.gender
        let location = this.state.location
        evt.preventDefault()
        // this sets the state for the new PersonFormComponent
        this.setState({name,birthdate,gender,location})
        
        // this sends the data up to lifeGameComponent
        this.state.setParentState({name,birthdate,gender,location})
    }
    render(){
        return(
            <div className="NewPersonFormComponent">
                <h1>Please fill out your Charactors information</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input
                    type='text'
                    name='name'
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    >
                    </input>
                    <input
                    type='date'
                    name= 'birthdate'
                    value={this.state.birthdate}
                    onChange = {this.handleChange}
                    ></input>
                    <input
                    type='text'
                    name='gender'
                    value = {this.state.gender}
                    onChange = {this.handleChange}
                    >
                    </input>
                    <input
                    type='text'
                    name='hobbies'
                    value = {this.state.hobbies}
                    onChange = {this.handleChange}
                    >
                    </input>
                    <input
                    type='text'
                    name='location'
                    value = {this.state.location}
                    onChange = {this.handleChange}
                    >
                    </input>
                    <input
                    type='text'
                    name='currentJob'
                    value={this.state.currentJob}
                    onChange = {this.handleChange}
                    >
                    </input>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
export default NewPersonFormComponent