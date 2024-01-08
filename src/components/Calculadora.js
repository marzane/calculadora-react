import React, { useState } from "react";
import { evaluate } from "mathjs";
import "../css/Calculadora.css";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import BotonClear from "./BotonClear";

function Calculadora() {

    const [input, setInput] = useState("");

    const actualizarInput = valor => {
        return setInput(input + valor);  // concatenar cadenas
    }

    const resolverOperacion = () => {

        let valor = "";

        if (input) {
            
            try{
                valor = evaluate(input);
            } catch {
                valor = "error";
            }

            return setInput(valor);
        }

    }


    return (
        <div className="contenedor-calculadora">
            <div className="calculadora-fila">
                <Pantalla
                    operacion={input}
                />
            </div>
            <div className="calculadora-fila">
                <Boton manejarClick={actualizarInput}>1</Boton>
                <Boton manejarClick={actualizarInput}>2</Boton>
                <Boton manejarClick={actualizarInput}>3</Boton>
                <Boton manejarClick={actualizarInput}>+</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton manejarClick={actualizarInput}>4</Boton>
                <Boton manejarClick={actualizarInput}>5</Boton>
                <Boton manejarClick={actualizarInput}>6</Boton>
                <Boton manejarClick={actualizarInput}>-</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton manejarClick={actualizarInput}>7</Boton>
                <Boton manejarClick={actualizarInput}>8</Boton>
                <Boton manejarClick={actualizarInput}>9</Boton>
                <Boton manejarClick={actualizarInput}>*</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton manejarClick={actualizarInput}>.</Boton>
                <Boton manejarClick={actualizarInput}>0</Boton>
                <Boton manejarClick={resolverOperacion}>=</Boton>
                <Boton manejarClick={actualizarInput}>/</Boton>
            </div>
            <div className="calculadora-fila">
                <BotonClear manejarClear={() => setInput("")}>
                    clear
                </BotonClear>
            </div>

        </div>
    );
}

export default Calculadora;