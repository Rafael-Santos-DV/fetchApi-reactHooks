import { useDispatch } from "../dispatch";
import React from "react";
import P from "prop-types";
import { Button as ButtonUI} from "@mui/material";

export const Button = ({ quantButton, text }) => {
    const dispatch = useDispatch()[1];
    const disabled = () => {
        const itens = document.querySelectorAll(".buttonUI");
        itens.forEach(x => {
            x.setAttribute("disabled", "true")
            x.style.color = "#ccc";
        });
    }
    return (
        <ButtonUI className="buttonUI" color="success" onClick={() => {
            dispatch( { type: quantButton })
            disabled();
        }}>{text}</ButtonUI>
    );
}

Button.propTypes = {
    quantButton: P.string,
    text: P.string,
}