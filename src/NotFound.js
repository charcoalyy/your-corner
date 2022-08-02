import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Oops...</h2>
            <p>That page doesn't exist!</p>
            <Link to="/" className="page-actions"><button>Back to Home</button></Link>
        </div>
    )
}

export default NotFound;