import React, { Component } from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import AuthorContainer from './AuthorContainer'
import BookContainer from './BookContainer'

class App extends Component {
    constructor(){
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount(){
        this.getAuthors()
    }

    getAuthors = () => {
        axios.get("/author")
            .then(res => {
                this.setState({authors: res.data})
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route 
                        exact path="/" 
                        render={rProps => <AuthorContainer authors={this.state.authors}/>}/>
                    <Route 
                        path="/books/:authorID" 
                        component={BookContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App