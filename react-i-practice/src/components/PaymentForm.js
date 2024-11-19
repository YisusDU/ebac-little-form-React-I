// src/components/PaymentForm.js
import React, { Component } from 'react';

class PaymentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            expirationDate: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('Campo actualizado:', e.target.name, e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', { cardNumber: this.state.cardNumber, expirationDate: this.state.expirationDate });
        this.props.onPayment({ cardNumber: this.state.cardNumber, expirationDate: this.state.expirationDate });
    }

    componentDidMount() {
        console.log('Payment Form ha sido montado');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.cardNumber !== this.state.cardNumber || prevState.expirationDate !== this.state.expirationDate) {
            console.log('Payment Form ha sido actualizado');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Número de Tarjeta:</label>
                    <input 
                        type="text" 
                        name="cardNumber" 
                        value={this.state.cardNumber} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <label>Fecha de Expiración:</label>
                    <input 
                        type="text" 
                        name="expirationDate" 
                        value={this.state.expirationDate} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <button type="submit">Guardar</button>
                </div>
            </form>
        );
    }
}

export default PaymentForm;