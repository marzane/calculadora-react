import React from "react";
import "../css/Pantalla.css";

function Pantalla({ operacion }) {

    return (
        <div className="pantalla">
            {operacion}
        </div>
    );
}

export default Pantalla;