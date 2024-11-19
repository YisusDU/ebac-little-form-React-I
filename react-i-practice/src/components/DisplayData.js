// src/components/DisplayData.js
import React, { Component } from 'react';

class DisplayData extends Component {
    componentDidMount() {
        console.log('DisplayData ha sido montado');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userData !== this.props.userData || 
            prevProps.contactData !== this.props.contactData || 
            prevProps.paymentData !== this.props.paymentData) {
            console.log('Los datos han cambiado');
        }
    }

    render() {
        const { userData, contactData, paymentData } = this.props;
        return (
            <main>
                <h2>Datos del Usuario</h2>
                <p>Nombre: {userData.name}</p>
                <p>Edad: {userData.age}</p>

                <h2>Datos de Contacto</h2>
                <p>Email: {contactData.email}</p>
                <p>Teléfono: {contactData.phone}</p>

                <h2>Datos de Pago</h2>
                <p>Número de Tarjeta: {paymentData.cardNumber}</p>
                <p>Fecha de Expiración: {paymentData.expirationDate}</p>
            </main>
        );
    }
}

export default DisplayData;