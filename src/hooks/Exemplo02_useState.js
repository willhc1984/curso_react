import React from "react";
import { useState } from "react";

//Função
function Exemplo02_useState(){

    //UseState
    const[nome, setNome] = useState('');
    const[idade, setIdade] = useState(0);

    //Retorno
    return(
        <div>
            <input type='text' placeholder='Nome' onChange={e => setNome(e.target.value)} />
            <input type='number' placeholder='Idade' onChange={e => setIdade(e.target.value)} />
            <p>{nome}</p>
            <p>{idade}</p>
        </div>
    )

}

export default Exemplo02_useState;