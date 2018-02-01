import React from 'react'

export default function User(props) {
    const {name,email,address,phone,website,company} = props.userInfo[0];
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: <a href={website} target='_blank'>{website}</a></p>
            <p>Street: {address.city}</p>
            <p>Company: {company.name}</p>
        </div>
    )
}
