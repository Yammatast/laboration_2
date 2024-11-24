import React, { createContext, useCallback, useState } from 'react';

const JokeContext = createContext();

export const JokeProvider = ({ children }) => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [keyword, setKeyword] = useState('');

    const fetchJoke = useCallback(
        async (isSingleLineJoke) => {
            setLoading(true);
            try {
                const baseUrl = `https://v2.jokeapi.dev/joke/Programming`;
                const safeMode = `safe-mode`;
                const combinedUrl =
                    keyword === ''
                        ? `${baseUrl}?${safeMode}&type=${isSingleLineJoke ? 'single' : 'twopart'}`
                        : `${baseUrl}?contains=${encodeURIComponent(keyword)}&${safeMode}&type=${isSingleLineJoke ? 'single' : 'twopart'}`;
                const response = await fetch(combinedUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSuccess(!data.error);
                    setError(data.error);
                    isSingleLineJoke
                        ? setJoke(`${data.joke}`)
                        : setJoke(`${data.setup} ${data.delivery}`);
                    return;
                }

                setSuccess(false);
                setError(true);
            } catch (err) {
                setError(true);
                setSuccess(false);
            } finally {
                setLoading(false);
            }
        },
        [keyword]
    );

    const value = {
        joke,
        loading,
        error,
        fetchJoke,
        keyword,
        setKeyword,
        success,
        setSuccess,
        setError,
    };
    return (
        <JokeContext.Provider value={value}>{children}</JokeContext.Provider>
    );
};

export const useJokeContext = () => React.useContext(JokeContext);
