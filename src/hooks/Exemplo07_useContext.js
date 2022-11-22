import React, {createContext, useContext} from "react";

//Criar contexto
const Contexto = createContext();


// Componente principal
function Principal(){

    let texto = 'Enviando informações';

    return(
        <Contexto.Provider value={{texto}}>     
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

    const {texto} = useContext(Contexto);

    return(      
        <div style={{backgroundColor: 'yellow', width:'300px', height:'300px', margin:'50px'}}>
            <p>{texto}</p>
        </div>
    );
}

//Exportar
export default Principal;

