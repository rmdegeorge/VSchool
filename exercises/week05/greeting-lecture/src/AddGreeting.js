import React from 'react'

class AddGreeting extends React.Component {
    constructor(){
        super()
        this.state = {
            newGreeting: ""
        }
    }
    // save new greetings in parent
    render(){
        return (
        <form>
            <input value={this.state.newGreeting} placeholder="Hello!!"/>
            <button>add new</button>
        </form>
        )
    }
    
}

export default AddGreeting
