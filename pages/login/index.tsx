import React, { FormEvent, useState } from 'react';
import Router from 'next/router';
import Api from '@/lib/api';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            let response = await Api.post('/api/auth/login', { username, password });
            if (response.status >= 400) {
                throw new Error('Error');
            }
            Router.push('/');
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
