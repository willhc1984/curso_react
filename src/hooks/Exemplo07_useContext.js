import React, {createContext, useContext, useState} from "react";

//Criar contexto
const Contexto = createContext();


// Componente principal
function Principal(){

    let texto = 'Enviando informações';

    const [fundo, setFundo] = useState('yellow');

    const alterarFundo = () => {
        setFundo(fundo === 'yellow' ? 'blue' : 'yellow');
    }

    return(
        <Contexto.Provider value={{texto, fundo, alterarFundo}}>     
            <Camada1 />
        </Contexto.Provider>
    );
}

//Componente camada 1
function Camada1(){
    return(        
        <div style={{backgroundColor: 'blue', width:'500px', height:'500px', display:'inline-block'}}>
            <Camada2 />
        </div>
    );
}

//Componente camada 2
function Camada2(){
    return(      
        <div style={{backgroundColor: 'red', width:'400px', height:'400px', margin:'50px', display:'inline-block'}}>
            <Camada3 />
        </div>
    );
}

//Componente camada 3
function Camada3(){

    const {texto, fundo, alterarFundo} = useContext(Contexto);

    return(      
        <div style={{backgroundColor: fundo, width:'300px', height:'300px', margin:'50px'}}>
            <p>{texto}</p>
            <button onClick={alterarFundo}>Clique aqui</button>
        </div>
    );
}

//Exportar
export default Principal;

