import React, { useState } from 'react';
import NavBar from './NavBar';

export default function Contacto() {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Correo:', email);
        console.log('Descripción:', description);
    };

    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <h2 className="text-center">Cuentanos ¿en qué te podemos ayudar? </h2>
                
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Introduce tu correo electrónico"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Introduce la descripción"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </>
    );
}
