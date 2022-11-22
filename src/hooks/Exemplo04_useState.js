import React from "react";
import { useState } from "react";

//Função
function Exemplo04_useState(){

    //Modelo JSON
    const modelo = {
        nome:'', email:'', cidade:''
    }

    //useState
    const [formulario, setFormulario] = useState(modelo);

    //Evento
    const evento = (e) => {
        let nome = e.target.name;
        let valor = e.target.value;

        setFormulario({...formulario, [nome]:valor});
    }

    //Retorno
    return(
        <div>
            <h1>react hooks</h1>
            <input type='text' name='nome' placeholder='Nome' onChange={evento} />
            <input type='email' name='email' placeholder='Email' onChange={evento} />
            <input type='text' name='cidade' placeholder='Cidade' onChange={evento} />

            <p>{formulario.nome}</p>
            <p>{formulario.email}</p>
            <p>{formulario.cidade}</p>

            <p>{JSON.stringify(formulario)}</p>
        </div>
    )

}

export default Exemplo04_useState;