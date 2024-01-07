import React from "react";
import "../css/Calculadora.css";
import Boton from "./Boton";

function Calculadora() {
    return (
        <div className="contenedor-calculadora">
            <div className="calculadora-fila">

            </div>
            <div className="calculadora-fila">
                <Boton>1</Boton>
                <Boton>2</Boton>
                <Boton>3</Boton>
                <Boton>+</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton>4</Boton>
                <Boton>5</Boton>
                <Boton>6</Boton>
                <Boton>-</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton>7</Boton>
                <Boton>8</Boton>
                <Boton>9</Boton>
                <Boton>x</Boton>
            </div>
            <div className="calculadora-fila">
                <Boton>.</Boton>
                <Boton>0</Boton>
                <Boton>=</Boton>
                <Boton>/</Boton>
            </div>
            <div className="calculadora-fila"></div>

        </div>
    );
}

export default Calculadora;