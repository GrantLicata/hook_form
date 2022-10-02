import React from 'react'
import { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useSate("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            password: password
        }
    }
  return (
    <form onSubmit={ createUser }>
        <div>
            <label>First name:</label>
            <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }></input>
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }></input>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" onChange={ (e) => setPassword(e.target.value)} value={ password }></input>
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="text" onChange={ (e) => set}></input>
        </div>
        <input type="submit" value="create User"></input>
    </form>
  )
}

export default UserForm