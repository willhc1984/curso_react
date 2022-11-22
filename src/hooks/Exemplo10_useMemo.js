import React, {useMemo, useState} from "react";

//Função
function Exemplo10_useMemo(){

    //useState
    const [contador, setContador] = useState(0);
    const[nomes, setNomes] = useState(['Will','Valentina','Karen','Vera','Irineu']);

    //useMemo
    const listaSemRender = useMemo(() => {
        return <ListarNomes lista={nomes} />
    }, [nomes]);

    //Retorno
    return(
        <div>
            <h1>UseMemo</h1>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador+1)}>Incrementar</button>
            {listaSemRender}
        </div>
    )
}

//Componente para lista nome
function ListarNomes({lista}){

    console.log('Componete criado');

    return(
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    )

}

export default Exemplo10_useMemo;