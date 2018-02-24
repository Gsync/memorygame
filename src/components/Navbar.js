import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({onClickNewGame}) => {
    return (
        <header>
                <h2><a>Memory Game</a></h2>
                <nav>
                    <li><a onClick={onClickNewGame}>New Game</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        );
}

Navbar.propTypes = {
    onClickNewGame: PropTypes.func
}

export default Navbar;