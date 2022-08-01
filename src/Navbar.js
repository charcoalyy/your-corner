import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Your Corner of the Internet</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/settings">Settings</a>
                <a href="/make-new">Make a Page</a>
            </div>
        </nav>
    );
}

export default Navbar;