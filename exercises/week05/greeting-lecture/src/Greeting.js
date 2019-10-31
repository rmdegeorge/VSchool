import React from 'react'

function Greeeting({color}) {
    return (
        <h1 style={{color}}>Good day, all you fine people</h1>
    )
}

function Greeting(props) {
    return (
        <h1 style={{color: props.color}}>Good day, all you fine people</h1>
    )
}

export default Greeting
