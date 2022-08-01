import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const Page = () => {
    const { itemId } = useParams(); // returns itemId to be what it was defined to be in home.js, which was "item.id" from "items" array
    const { data, isPending, error } = useFetch("http://localhost:8000/items/" + itemId) // targets which object in "items" array has the matching id, and assigns that object to data!

    return(
        <section className="specific-page">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>} 
            {data && (
                <article className="full-page">
                    <h2>{data.title}</h2> 
                    <h4>{data.desc}</h4>
                    <br></br>
                    <p>{data.body}</p>
                </article>
            )}
        </section>
    )
}

export default Page;