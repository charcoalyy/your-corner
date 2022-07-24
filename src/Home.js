import { useState } from 'react';

const Homepage = () => {

    const [name, setName] = useState('homie');
    const handleClick = () => setName(prompt("What's your name?"));

    const [pages, setPages] = useState([]); // initial state of pages is empty
    class pageMaker { // class to use for creating objects that store basic page info
        constructor(title, date, id) {
            this.title = title;
            this.date = date;
            this.id = id;
        }
    }
    const testFunction = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        const newPage = new pageMaker(prompt("Title your new page"), `${mm}/${dd}/${yyyy}`, pages.length + 1); // create a new page object from the class
        setPages(pages => [...pages, newPage]); // append new page to state hook
    }

    return (
        <section className="homepage">
            <h2>Homepage</h2>
            <p>Pleased to see you, {name}.</p>
            <button onClick={handleClick}>Update your name</button>
            <br></br><br></br>
        
            <h3>Your current pages</h3>
            <button onClick={testFunction}>Make a new page</button>
            {pages.map((page) => (
                <section className="page-preview" key={page.id}>
                    <h4>{page.title}</h4>
                    <p>Created {page.date}</p>
                </section>
            ))}
        </section>
    );
}

export default Homepage;