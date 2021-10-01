import React, { Component } from 'react';
import Timer from './components/timer';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logo from './image.png'
import setInterval from './actions'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <a href="https://liverton.com/">
                            <img src={logo} alt="" height="20%" width="20%" />
                        </a>
                        <Navbar.Brand href="#home">Liverton Cryptocurrencies</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <nav classfor="navbar navbar-light bg-light">
                                <form classfor="form-inline">
                                    <input classfor="form-control mr-sm-2" type="number" placeholder="Frequency"
                                        aria-label="Frequency"
                                        onChange={(event) => this.props.store.dispatch({ type: 'SETINTERVAL', payload: event.target.value })} ></input>
                                </form>
                            </nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Timer store={this.props.store.getState()} refreshinterval={this.props.store.getState()}/>
            </div>
        )
    }
}

export default App;
