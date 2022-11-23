import React, {useState, useEffect, useCallback} from "react";

//Função
function Exemplo11_useCallBack(){

    //UseState
    const [cor, setCor] = useState('blue');
    const [numero, setNumero] = useState(0);

    //Fução altera cor
    const alterarCor = () => {
        setCor(cor === 'blue' ? 'gray' : 'blue');
    }

    //Função para listar os numeros
    const listarNumeros = useCallback(() => {
        return [numero-1, numero, numero+1];
    }, [numero])

    //Retorno
    return(
        <div style={{backgroundColor : cor}}>
            <h1>Exemplo useCallback</h1>
            <button onClick={alterarCor}>Alterar cor</button>
            <input type='number' value={numero} onChange={e => setNumero(parseInt(e.target.value))} />
            <ComponenteListarNumeros lista={listarNumeros}/>
        </div>
    )
}

//Componente listar numero
function ComponenteListarNumeros({lista}){

    //useState
    const [vetor, setVetor] = useState([]);

    //useEffect
    useEffect(() => {
        console.log('Componente criado!');
        setVetor(lista);
    }, [lista]);

    //Retorno
    return(
        <ul>
            {vetor.map(n => (<li key={n}>{n}</li>))}
        </ul>
    );
}

//Exportar
export default Exemplo11_useCallBack;