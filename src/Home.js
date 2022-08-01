import React, { useState } from 'react';
import PageList from './PageList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Homepage = ({pages, setPages}) => {

    const [name, setName] = useState('friend');
    const handleClick = () => setName(prompt("What's your name?"));


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
    
    const { data, isPending, error } = useFetch("http://localhost:8000/items"); // set these equal to a specific dataset fetched (in this case, items)

    return (
        <section className="homepage">
            <h2>Homepage</h2>
            <p>Pleased to see you, {name}.</p>
            <button onClick={handleClick}>Update your name</button>
            <br></br><br></br>
            <PageList pages={pages} newPage={newPage} deletePage={deletePage} title="All current pages"/> 

            {isPending && <div>Loading database...</div>} {/* if data is pending, show loading message */}
            {error && <div>{error}</div>} {/* if error present, show error message */}
            <div className="database-test">
                {data && data.map((item) => { /* if data present, go through each data value and return these divs */
                    return (
                        <section key={item.id} className="page-preview">
                            <Link to={`/items/${item.id}`} className="page-link">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </Link>
                            <br></br>
                        </section>
                    )
            })}</div>
        </section>
    );
}

export default Homepage;

// FEATURES---------
    // MAKE A NEW BUTTON THAT FILTERS/SEARCHES CURRENT PAGES... ie. set prop pages={pages.filter(xxx)} .... so move "make new" button to home.js?
    // MAKE BUTTON TO CHANGE MAIN & SECONDARY COLOR

// CHANGES NEEDED------
    // don't put new pages in state, put it into json database