import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div onClick={props.on} className="card" style={style}>Card</div>
    );
};

Card.propTypes = {
    showing: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;