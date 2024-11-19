// src/App.js
import React, { Component } from 'react';
import UserForm from './components/UserForm';
import ContactForm from './components/ContactForm';
import PaymentForm from './components/PaymentForm';
import DisplayData from './components/DisplayData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            contactData: {},
            paymentData: {}
        };
    }

    handleUser  = (data) => {
        this.setState({ userData: data });
    }

    handleContact = (data) => {
        this.setState({ contactData: data });
    }

    handlePayment = (data) => {
        this.setState({ paymentData: data });
    }

    render() {
        return (
            <article>
                <h1>Formulario de Usuario</h1>
                <UserForm onUser ={this.handleUser } />
                <ContactForm onContact={this.handleContact} />
                <PaymentForm onPayment={this.handlePayment} />
                <DisplayData 
                    userData={this.state.userData} 
                    contactData={this.state.contactData} 
                    paymentData={this.state.paymentData} 
                />
            </article>
        );
    }
}

export default App;