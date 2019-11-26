import React, { Component } from 'react'
import axios from 'axios'

class BookContainer extends Component {
    constructor(){
        super()
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        this.getBooks()
    }

    getBooks = () => {
        axios.get(`/book/${this.props.match.params.authorID}`)
            .then(res => this.setState({ books: res.data}))
            .catch(err => console.log(err))
    }
    
    render(){
        return (
            <div>
                { this.state.books.map(book => <h1>{book.title}</h1>)}
            </div>
        )
    }
}

export default BookContainer