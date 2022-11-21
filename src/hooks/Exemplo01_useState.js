import React from "react";
import { useState } from "react";

//Função
function Exemplo01_useState(){

    //useState
    const [texto, setTexto] = useState('Hello World!');

    //Evento
    const evento = (e) => {
        setTexto(e.target.value);
    }

    //Retorno
    return(
        <div>
            <input type='text' onChange={evento} />
            <p>{texto}</p>
        </div>
    );

}

//Exportar
export default Exemplo01_useState;