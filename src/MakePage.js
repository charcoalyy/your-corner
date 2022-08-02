import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const MakePage = () => {
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ body, setBody ] = useState("");
    const [ isPending, setIsPending ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        const item = { title, desc, body }; // note: JSON adds a unique ID automatically :)
        fetch("http://localhost:8000/items", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(() => {
            setTitle(""); // empties fields
            setDesc("");
            setBody("");
            setIsPending(false);
            navigate('/') // redirect to home page when page published
        })
    }

    return(
        <div className="make-new">
            <h2>Make a New Page!</h2>
            <form onSubmit={handleSubmit}>
                <label>Page title </label>
                <input 
                    type="text" 
                    required
                    value={title} // input value is set to "title" state
                    onChange={(e) => {setTitle(e.target.value)}} // when input value changes, "title" state is set to current input value
                />
                <label>Page description </label>
                <input 
                    type="text" 
                    required
                    value={desc}
                    onChange={(e) => setDesc((e.target.value))}
                />
                <label>Page body </label>
                <textarea
                    required
                    rows="5"
                    value={body}
                    onChange={(e) => setBody((e.target.value))}
                ></textarea>
                {isPending? <button disabled>Making page</button> : <button>Make page</button>}
            </form>
        </div>
    )
}

export default MakePage;