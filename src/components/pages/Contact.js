import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [requiredField, setRequiredField] = useState('');

    const handleInputChange = (event) => {

        const { field, value } = event.target;

        if (field === 'name') {
            setName(value);
        } if (field === 'email') {
            setEmail(value);
        } if (field === 'message') {
            setMessage(value);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setRequiredField(`The Email address is not valid`);
            return;
        } if (!name) {
            setRequiredField(`Name is required`);
            return;
        } if (!email) {
            setRequiredField(`Email address is required`);
            return;
        } if (!message) {
            setRequiredField(`Message is required`);
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
                    type="text" 
                />
                <label for="email">Email Address:</label>
                <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                />
                <label for="message">Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
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