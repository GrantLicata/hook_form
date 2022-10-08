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
        console.log("Welcome", newUser)

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
  return (
    <>
        <form className="container col-3 d-flex flex-column justify-content-center" onSubmit={ createUser }>
            <div className="mb-3">
                <label className="form-label">First name:</label>
                <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name:</label>
                <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input className="form-control" type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password:</label>
                <input className="form-control" type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }></input>
            </div>
            <input type="submit" className="btn btn-primary mb-4" value="create User"></input>
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