import React, { useState } from 'react';
import validateEmail from '../../utils/helpers'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [requiredField, setRequiredField] = useState('');

    const handleInputChange = (event) => {

        const { target } = event;
        const field = target.name;
        const value = target.value;

        if (field === 'name') {
            setName(value);
        } if (field === 'email') {
            setEmail(value);
        } if (field === 'message') {
            setMessage(value);
        }
    };

    const handleOnBlurInput = (event) => {

        const { target } = event;
        const field = target.name;

        if (field === 'name' && !name) {
            setRequiredField("Name is required");
        } if (field === 'email' && !email) {
            setRequiredField("Email address is required");
        } if (field === 'message' && !message) {
            setRequiredField("Message is required");
        } if (name && !email && !message) {
            setRequiredField("Email address and message are required");
        } if (name && email && validateEmail(email) && !message) {
            setRequiredField("Message is required");
        } if (name && !email && message) {
            setRequiredField("Email address is required");
        } if (!name && email && validateEmail(email) && message) {
            setRequiredField("Name is required");
        } if (!name && email && validateEmail(email) && !message) {
            setRequiredField("Name and message are required")
        } if (!name && !email && message) {
            setRequiredField("Name and email address are required")
        } if (email && !validateEmail(email)) {
            setRequiredField("The Email address is not valid");
        } if (name && email && validateEmail(email) && message) {
            setRequiredField("");
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (email && !validateEmail(email)) {
            setRequiredField("The Email address is not valid");
            return;
        } if (!name) {
            setRequiredField("Name is required");
            return;
        } if (!email) {
            setRequiredField("Email address is required");
            return;
        } if (!message) {
            setRequiredField("Message is required");
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="container-fluid p-4 main-section">
            <h1 className="row justify-content-center my-4">Contact</h1>
            <form id="contact-form">
                <label className="row mx-0 my-2" htmlFor="name">Name:</label>
                <input 
                    className="row mx-0 my-2"
                    value={name} 
                    name="name" 
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                    type="text" 
                />
                <label className="row mx-0 my-2" htmlFor="email">Email Address:</label>
                <input 
                    className="row mx-0 my-2"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                    type="email"
                />
                <label className="row mx-0 my-2" htmlFor="message">Message:</label>
                <textarea
                    className="row mx-0 my-2"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                />
                {requiredField && (
                    <p id="required" className="row mx-0 my-2">{requiredField}</p>
                )}
                <button id="submit-btn" className="row justify-content-center mx-auto my-3" type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
            
        </section>
    )
}

export default Contact;