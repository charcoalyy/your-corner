import React, { useState } from 'react';
import PageList from './PageList';

const Homepage = () => {

    const [name, setName] = useState('friend');
    const handleClick = () => setName(prompt("What's your name?"));

    const [pages, setPages] = useState([]);

    class pageMaker { // class to use for creating objects that store basic page info
        constructor(title, date, id) {
            this.title = title;
            this.date = date;
            this.id = id;
        }
    }

    const newPage = () => {
        const newPage = new pageMaker(prompt("Title your new page"), (new Date ()).toLocaleString(), (new Date()).getTime()); // create a new page object from the class
        setPages(pages => [...pages, newPage]); // append new page to state hook
    }

    const deletePage = (pageIdToRemove) => {
        setPages(pages.filter(page => page.id !== pageIdToRemove));
    }

    return (
        <section className="homepage">
            <h2>Homepage</h2>
            <p>Pleased to see you, {name}.</p>
            <button onClick={handleClick}>Update your name</button>
            <br></br><br></br>
            <PageList pages={pages} newPage={newPage} deletePage={deletePage} title="All current pages"/> 
        </section>
    );
}

export default Homepage;

// FEATURES---------
    // MAKE A NEW BUTTON THAT FILTERS/SEARCHES CURRENT PAGES... ie. set prop pages={pages.filter(xxx)} .... so move "make new" button to home.js?
    // MAKE BUTTON TO CHANGE MAIN & SECONDARY COLOR

// EXTRA---------------
    // ADD A LOADING ANIMATION FR DELETION