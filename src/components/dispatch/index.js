import { useContext, useEffect, useReducer } from "react";
import { GlobalContextState } from "../../context";
import { reducer } from "../reducer";

const initialState = {
    quantButton: 0,
}

export const useDispatch  = () => {
    const [dice, dispatch] = useReducer(reducer, initialState);
    const { setQuant } = useContext(GlobalContextState);
    useEffect(() => {
        setQuant(dice.quantButton);
    }, [dice])
 
    return [dice, dispatch];
}