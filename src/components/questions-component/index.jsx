import React, { useEffect, useState } from "react";
import P from "prop-types";
import Button from "@mui/material/Button";
import { useFetch } from "../../components/req-questions";


// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

export const QuestionsComponent = ({ url, valor }) => {
    const [dice] = useFetch(url, valor);
    const  [erros, setErros] = useState(0);
    const  [acertos, setAcertos] = useState(0);
    const [aleatorio, setAleatorio] = useState([]);
   
    const verificador = (opButton, correta, index) => {
        const buttons = document.querySelectorAll(`.button${index} > button`);
        buttons.forEach((x) => {
            
            if (correta.toLowerCase() === x.innerText.toLowerCase()) {
                x.style.color = "green";
            }else {
                x.style.color = "red";
            }
        });
        
        buttons.forEach(x => {
                x.setAttribute("disabled", true);
                x.style.backgroundColor = "#ccc";
            }
        );
       opButton === correta ? setAcertos(x => x + 1) : setErros(x => x + 1);
    }

    useEffect(() => {
        const perguntas = {};
        const newArray = [];
        dice && dice.results.map((v, i) => {
            perguntas[`pergunta${i}`] = shuffleArray([...v.incorrect_answers, v.correct_answer]);
            newArray.push(perguntas[`pergunta${i}`]);
        })
        
        setAleatorio(newArray);
        
    }, [dice]);
    return (
        <div>
            <h1>Acertos {acertos} e Erros: {erros}</h1>
            {dice && dice.results.map((item, index) => {
            const resps = [...[...aleatorio]][index];
           
            return (
                <div className={`button${index}`} key={index}>
                    <p>{index+1}) {item.question}</p>
                    {resps &&
                    resps.map((opButton, i) => {
                            
                            return(
                                <Button
                                    sx={{margin: '10px', fontSize: '.7rem', padding: '4px'}}
                                    variant='contained' 
                                    onClick={() => verificador(opButton, item.correct_answer, index)}
                                    key={i}
                                >
                                    {opButton}
                                </Button>
                            )}
                        )
                    }
                </div>
            )})}
        </div>
    );
}

QuestionsComponent.propTypes = {
    url: P.string.isRequired,
    valor: P.number.isRequired,
};