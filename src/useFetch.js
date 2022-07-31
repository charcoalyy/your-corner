import { useState, useEffect } from 'react';

// custom hooks must always start with "use"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url) // returns a promise
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource')
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
    }, [url]) // refetches if url changes

    return {data, isPending, error} // return what is going to be used
}

export default useFetch;