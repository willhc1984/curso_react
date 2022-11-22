import React from "react";
import { useState, useEffect } from "react";

//Função
function Exemplo06_useEffect(){

    //useState
    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState('Carregando...');

    //useEffect
    useEffect(() => {
        obterDados();
    });

    //Função para obter dados da API
    const obterDados = async () => {
        const dados = await fetch('https://jsonplaceholder.typicode.com/photos');
        const converter = await dados.json();
        setVetor(converter);
        setStatus('Dados carregados!');
    }

    //Retorno
    return(
        <div>
            <h1>useEffect - requisição para API</h1>
            <ul>
                <h2>{status}</h2>
                {vetor.map(objeto => (<li>{objeto.title}</li>))}
            </ul>
        </div>
    )

}


//Exportar
export default Exemplo06_useEffect;