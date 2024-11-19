// src/components/UserForm.js
import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Llamar a la función onUser  para actualizar los datos del usuario
        this.props.onUser ({ name: this.state.name, age: this.state.age });
    }

    componentDidMount() {
        console.log('User Form ha sido montado');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.name !== this.state.name || prevState.age !== this.state.age) {
            console.log('User Form ha sido actualizado');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Nombre:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        required 
                    />

                    <label> Edad: </label>
                    <input 
                        type="number" 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                        min="0" 
                        required 
                    />
                    <button type="submit">Guardar</button>
                </div>
            </form>
        );
    }
}

export default UserForm;