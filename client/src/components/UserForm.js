import React from 'react'
import { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
            }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
  return (
    <>
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
                <label>Email:</label>
                <input type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }></input>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }></input>
            </div>
            <input type="submit" value="create User"></input>
        </form>
        <h3>Your User Information:</h3>
        <div>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
    </>



  )
}

export default UserForm