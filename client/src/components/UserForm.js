import React from 'react'
import { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("")


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
        if (firstName.length == 0) {
            setFirstNameError("First name must not be blank");
        } else if (firstName.length < 2) {
            setFirstNameError("Must be greater than 2");
        } else {
            setFirstNameError("");
        }

        setLastName("");
        if (lastName.length == 0) {
            setLastNameError("Last name must not be blank");
        } else if (lastName.length < 2) {
            setLastNameError("Must be greater than 2");
        } else {
            setLastNameError("");
        }

        setEmail("");
        if (email.length == 0) {
            setEmailError("Email must not be blank");
        } else if (email.length < 5) {
            setEmailError("Must be greater than 5");
        } else {
            setEmailError("");
        }

        setPassword("");
        if (password.length == 0) {
            setPasswordError("Password must not be blank");
        } else if (password.length < 5) {
            setPasswordError("Must be greater than 8");
        } else {
            setPasswordError("");
        }

        setConfirmPassword("");
        if (confirmPassword.length == 0) {
            setConfirmPasswordError("Password confirmation must not be blank");
        } else if (password.length < 5) {
            setConfirmPasswordError("Must be greater than 8");
        } else {
            setConfirmPasswordError("");
        }

        setPasswordMatch("");
        if (password !== confirmPassword) {
            setPasswordMatch("Passwords must match")
        } else {
            setPasswordMatch("")
        }
    }

  return (
    <>
        <form className="container col-4 d-flex flex-column justify-content-center" onSubmit={ createUser }>
            <div className="bg-light p-2 rounded">
                <label className="form-label">First name:</label>
                <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }></input>
            </div>
            { firstNameError }
            <div className="mt-3 bg-light p-2 rounded">
                <label className="form-label">Last Name:</label>
                <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }></input>
            </div>
            { lastNameError }
            <div className="mt-3 bg-light p-2 rounded">
                <label className="form-label">Email:</label>
                <input className="form-control" type="email" onChange={ (e) => setEmail(e.target.value)} value={ email }></input>
            </div>
            { emailError }
            <div className="mt-3 bg-light p-2 rounded">
                <label className="form-label">Password:</label>
                <input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value)} value={ password }></input>
            </div>
            { passwordError }
            <div className="my-3 bg-light p-2 rounded">
                <label className="form-label">Confirm Password:</label>
                <input className="form-control" type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword }></input>
            </div>
            { confirmPasswordError }
            { passwordMatch }
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