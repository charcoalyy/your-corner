import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';
import ConfirmAction from './Confirm';

const Page = () => {
    const { itemId } = useParams(); // returns itemId to be what it was defined to be in home.js, which was "item.id" from "items" array
    const { data, isPending, error } = useFetch("http://localhost:8000/items/" + itemId) // targets which object in "items" array has the matching id, and assigns that object to data!

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:8000/items/" + itemId, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    const [openModal, setOpenModal] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    return(
        <section className="specific-page">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>} 
            {data && (
                <article className="full-page">
                    <Link to="/" className="page-action"><button>&#9664;</button></Link>
                    <h2>{data.title}</h2> 
                    <h4>{data.desc}</h4>
                    <br></br>
                    <p>{data.body}</p>
                    <div className="page-actions">
                        <button onClick={() => {setOpenModal(true)}}>Delete Page</button>
                        <button>Edit Page</button>
                        {openModal && <ConfirmAction action={`You are trying to delete "${data.title}".`} setModal={setOpenModal} confirmAction={setConfirmDelete} />}
                    </div>
                </article>
            )}
            {confirmDelete && (handleDelete(), setConfirmDelete(false))}
        </section>
    )
}

export default Page;