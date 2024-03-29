import React from "react";
import "../css/Boton.css";

function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "=");
    }

    return(
        <button className={`calculadora-boton${esOperador(props.children) ? " operador" : ""}`}
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    );
}

export default Boton;