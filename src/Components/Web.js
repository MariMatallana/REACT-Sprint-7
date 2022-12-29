import React, { Component } from "react";
import { useState, useEffect } from "react";


const Web = ({ pagesLanguaje, pagesNumber, setPagesNumber, setPagesLanguaje}) => {

    const incrementPages = () => {
        setPagesNumber(pagesNumber + 1)
    }

    const decrementPages = () => {
        pagesNumber <= 1 ? pagesNumber = 1 :
            setPagesNumber(pagesNumber - 1)
    }

    const incrementLanguajes = () => {
        setPagesLanguaje(pagesLanguaje + 1)
    }

    const decrementLanguajes = () => {
        pagesLanguaje <= 1 ? pagesLanguaje = 1 :
            setPagesLanguaje(pagesLanguaje - 1)
    }

    return (
        <div className="col-md-4">
            <div className="container mt-3 p-4 px-4 form-control border-dark border-3">
                Número de páginas
                <button className="btn btn-warning btn-sm fw-bold m-2 " onClick={incrementPages}> + </button>
                <span className="me-2"> {pagesNumber} </span>
                <button className="btn btn-warning btn-sm fw-bold ms-3" onClick={decrementPages}>-</button>
                {/* <input 
                    type="number" className="h6 my-2" name="pagesNumber" 
                    value={pagesNumber} onChange={(e) => handlePages(e.target.value)} />  */}

                <br></br>

                Número de idiomas
                <button className="btn btn-warning btn-sm fw-bold m-2" onClick={incrementLanguajes}>+</button>
                <span className="me-2"> {pagesLanguaje} </span >
                <button className="btn btn-warning btn-sm fw-bold ms-3" onClick={decrementLanguajes}>-</button>
                {/* <input type="number" className="h6 mt-2" name="pagesLanguaje" 
                value={pagesLanguaje} onChange={(e) => handleLanguajes(e.target.value)} /> */}
            </div>
        </div>)

}


export default Web;