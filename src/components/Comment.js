import React from 'react'

export default function Comment(props) {
    const {name,email,body} = props.comment;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
            <hr/>
        </div>
    )
}
