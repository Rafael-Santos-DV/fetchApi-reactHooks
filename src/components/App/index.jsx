import { GlobalContextState } from "../../context";
import { Questions } from "../questions";
import { useState } from "react";
import React from "react";

const App = () => {
    
    const [quant, setQuant] = useState(0);
    
    return (
            <GlobalContextState.Provider value={{ quant, setQuant }}>
                <Questions />
            </GlobalContextState.Provider>
        );
}

export default App;