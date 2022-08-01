import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const abortConst = new AbortController();

    useEffect(() => {
        fetch(url) // returns a promise , { signal: abortConst.signal }
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
                // if (err.name === 'AbortError') {
                //     console.log('Fetch aborted'); // if fetch is aborted (ie. moved to a different page before data loads), then do not change state of is pending
                // } else {
                    setError(err.message);
                    setIsPending(false);
                // }
            });

        // return() => abortConst.abort();
    }, [url]) // refetches if url changes

    return {data, isPending, error} // return what is going to be used
}

export default useFetch;