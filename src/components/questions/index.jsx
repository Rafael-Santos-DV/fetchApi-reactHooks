import { Button } from "../button";
import * as types from "../types";
import React, { useContext } from "react";
import { QuestionsComponent } from "../questions-component";
import { GlobalContextState  } from "../../context";

export const Questions = () => {
    const { quant } = useContext(GlobalContextState);
    return (
        <div>
            <p>Quantas perguntas vocẽ quer? </p>
            <Button quantButton={types.BUTTON_1} text="one" />
            <Button quantButton={types.BUTTON_2} text="two" />
            <Button quantButton={types.BUTTON_3} text="tree" />
            <Button quantButton={types.BUTTON_4} text="four" />
            <Button quantButton={types.BUTTON_5} text="five" />
            <Button quantButton={types.BUTTON_6} text="six" />
            <Button quantButton={types.BUTTON_7} text="seven" />
            <Button quantButton={types.BUTTON_8} text="eight" />
            <Button quantButton={types.BUTTON_9} text="nine" />
            <Button quantButton={types.BUTTON_10} text="ten" />
           <QuestionsComponent url="https://opentdb.com/api.php?amount=" valor={quant}/>
        </div>
    );
};