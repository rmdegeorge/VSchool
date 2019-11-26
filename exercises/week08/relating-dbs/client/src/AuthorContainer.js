import React from 'react'
import { Link } from 'react-router-dom'

function AuthorContainer(props){
    return (
        <div>
            {
                props.authors.map(author => 
                    <h1><Link to={`/books/${author._id}`}>{author.name}</Link></h1>)
            }
        </div>
    )
}

export default AuthorContainer