import { useState, useEffect } from "react";

export const useFetch = (url, quantButton) => {
    const [dice, setDice] = useState(null);
    
    useEffect(() => {
        fetch(url + quantButton)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
            })
            .then(json => setDice(json));
    }, [url, quantButton]);
    
    return [dice];
};
