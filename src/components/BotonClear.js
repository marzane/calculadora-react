import React from "react";
import "../css/BotonClear.css";
import "../css/Boton.css";

function BotonClear (props){

    return(
        <button className="boton-clear calculadora-boton" onClick={props.manejarClear}>
            {props.children}
        </button>
    );

}

export default BotonClear;