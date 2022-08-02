import React from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Homepage = ({name, setName}) => {

    const handleClick = () => setName(prompt("What's your name?"));

    // class pageMaker { // class to use for creating objects that store basic page info
    //     constructor(title, date, id) {
    //         this.title = title;
    //         this.date = date;
    //         this.id = id;
    //     }
    // }

    // const newPage = () => {
    //     const newPage = new pageMaker(prompt("Title your new page"), (new Date ()).toLocaleString(), (new Date()).getTime()); // create a new page object from the class
    //     setPages(pages => [...pages, newPage]); // append new page to state hook
    // }

    // const deletePage = (pageIdToRemove) => {
    //     setPages(pages.filter(page => page.id !== pageIdToRemove));
    // }
    
    const { data, isPending, error } = useFetch("http://localhost:8000/items"); // set these equal to a specific dataset fetched (in this case, items)

    return (
        <section className="homepage">
            <h2>Pleased to see you, {name}.</h2>
            <button onClick={handleClick}>Update your name</button>

            <h3 className="section-title">Current Pages</h3>
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