import React, {Component} from 'react';

export default class Options extends Component{
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }

    }

    handleToggle = () => {
        this.setState(prev => {
            return {toggle: !prev.toggle}
        })
    }

    render(props) {
        const styles = {
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }
        let visibility;
        if (this.state.toggle){
            visibility = "visible";
        } else {
            visibility = "hidden";
        }
        const toggleableInputStyles = {visibility};
        return (
            <div>
                <select name="greeting drop down" id="greeting-options">
                    <option value="">hello</option>
                    <option value="">hi</option>
                    <option value="">Good day, all you fine people</option>
                </select>
                change color?<label></label><input onChange={this.handleToggle} type="checkbox"/>
                
                {
                <label style={toggleableInputStyles} for="color">what color? 
                  <input id="color" name="color" placeholder="#666" value={props.color} onChange={props.handleChange} />
                </label>
                }
                {/* { this.state.toggle && 
                <label for="color">what color? 
                  <input id="color" name="color" placeholder="#666" value={props.color} onChange={props.handleChange} />
                </label>
                } */}

            </div> 
        )

    }
}
