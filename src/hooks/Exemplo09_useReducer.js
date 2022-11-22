import React, {useReducer} from "react";

function Exemplo09_useReducer(){

    //Função para incrementar e decrementar
    const funcao = (state, acao) => {

        switch(acao){
            case 'incrementar':
                return state +1;
            case 'decrementar':
                return state -1;
            default:
                return 0;
        }
    }

    //UseReducer
    const [contador, executarFuncao] = useReducer(funcao, 0);

    //Retorno
    return(
        <div>
            <h1>UseReducer</h1>
            <h2>{contador}</h2>

            <button onClick={e => executarFuncao('incrementar')}>Incrementar</button>
            <button onClick={e => executarFuncao('decrementar')}>Decrementar</button>
        </div>
    )


}

export default Exemplo09_useReducer;