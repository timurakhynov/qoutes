import React from "react";
import { Link } from "react-router-dom";
import './Quote.css';

const Quote = (props) => {
    return (
        <div className="QuoteDiv">
            <p>{props.text}</p>
            <h5 className="author">(c) {props.author}</h5>
            <div className="buttons">
                <Link to={`${props.id}`}><button>Edit</button></Link>
                <button onClick={props.remove}>X</button>
            </div>
        </div>
    )
}

export default Quote