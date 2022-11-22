import React, {useRef} from "react";

function Exemplo08_useRef(){

    //useRef
    const elemento = useRef();

    //Função
    const acao = () => {
        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = 'Digite algo...'
    }

    //Retorno
    return(
        <div>
            <h1> Hook useRef - manipula HTML sem realizar um Render</h1>
            <input type='text' ref={elemento} />
            <input type='button' value='Clique aqui' onClick={acao}/>
        </div>
    );    
}

export default Exemplo08_useRef;