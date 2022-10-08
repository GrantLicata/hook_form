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
        <form class="container col-3 d-flex flex-column justify-content-center" onSubmit={ createUser }>
            <div class="mb-3">
                <label class="form-label">First name:</label>
                <input class="form-control" type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Last Name:</label>
                <input class="form-control" type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Email:</label>
                <input class="form-control" type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input class="form-control" type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }></input>
            </div>
            <div class="mb-3">
                <label class="form-label">Confirm Password:</label>
                <input class="form-control" type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }></input>
            </div>
            <input type="submit" class="btn btn-primary mb-4" value="create User"></input>
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