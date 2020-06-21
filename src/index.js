import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './index.js';

const App = () => {
    return(
        <Container />
    );
}

ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

