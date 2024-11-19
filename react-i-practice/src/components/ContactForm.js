// src/components/ContactForm.js
import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onContact({ email: this.state.email, phone: this.state.phone });
    }

    componentDidMount() {
        console.log('Contact Form ha sido montado');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.email !== this.state.email || prevState.phone !== this.state.phone) {
            console.log('Contact Form ha sido actualizado');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <label>Teléfono:</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={this.state.phone} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <button type="submit">Guardar</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;