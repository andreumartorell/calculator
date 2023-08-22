import React from 'react';
import '../stylesheets/Boto.css';

function Boto(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return (
        <div
            className={`boto-contenidor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boto;