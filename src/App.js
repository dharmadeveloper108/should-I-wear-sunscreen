import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';

class Container extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            value: null,    
        };  
    }
    render() {
           return(
            <div>
                <Navbar/>
                <div class="container">
                    <Row/>
                </div>
            </div>
           );
    }
}

class Row extends React.Component {
    renderColumn(x) {
        return(
            <Column/>
        );
    }
    render() {
        return(
            <div class="row">
                {this.renderColumn()}
                {this.renderColumn()}
            </div>
        );
    }
}

class Column extends React.Component {
    render() {
        return(
            <div class="col">
                <h1>Hello world!</h1>
            </div>
        );
    }
}

export default Container;