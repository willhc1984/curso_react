import React from "react";
import { useState } from "react";

//Função
function Exemplo05_useEffect(){

    //useState
    const [texto, setTexto] = useState('Hello World!');

    //Retorno
    return(
        <div>
            <h1> Hook useEffect é executado após o render ser realizado.</h1>
            <h1>{texto}</h1>
        </div>
    )

}


//Exportar
export default Exemplo05_useEffect;