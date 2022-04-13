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
        <section>
            <h1>Contact</h1>
            <form>
                <label for="name">Name:</label>
                <input 
                    value={name} 
                    name="name" 
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                    type="text" 
                />
                <label for="email">Email Address:</label>
                <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                    type="email"
                />
                <label for="message">Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleOnBlurInput}
                />
                {requiredField && (
                    <p>{requiredField}</p>
                )}
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
            
        </section>
    )
}

export default Contact;