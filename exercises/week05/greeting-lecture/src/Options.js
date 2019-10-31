import React from 'react'

class Options extends React.Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => {
            return {toggle: !prevState.toggle}
        })
    }

    render(){
        const styles = {
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }

        // change style object for input
        // let visibility;

        // if(this.state.toggle){
        //     visibility = "visible"
        // } else {
        //     visibility = "hidden"
        // }

        // const toggleableInputStyles = { visibility } 

        // map over greetings from parent
        const mappedGreetings = [].map(()=>{})

        return (
            <div style={styles}>
                <select name="greeting drop down" id="greeting-options">
                    { mappedGreetings }
                </select>
                show color input?<label></label><input onChange={this.handleToggle} type="checkbox"/>
                { this.state.toggle &&
                <label for="color">what color? 
                    <input onChange={this.props.handleChange} id="color" value={this.props.color} name="color" placeholder="#666"/> 
                </label>               
                }
            </div>
        )
    }
}
      
export default Options
