import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from './context/Toast';
import { UserProvider } from './context/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </UserProvider>
    </BrowserRouter>
);

reportWebVitals();
