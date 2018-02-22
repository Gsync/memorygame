import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onClickNewGame() {

        }
    }
    static propTypes = {
        onClickNewGame: PropTypes.func
    }
    render() {
        return (
            <header>
                <h2><a>Memory Game</a></h2>
                <nav>
                    <li><a onClick={this.props.onClickNewGame}>New Game</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;