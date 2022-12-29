import React, { Component } from "react";
import { useState, useEffect } from "react";


const Web = ({pagesLanguaje, pagesNumber, setPagesNumber, setPagesLanguaje, handlePages, handleLanguajes}) => {
   
    const incrementPages = () => {
    setPagesNumber(pagesNumber + 1)
    }

    const decrementPages = () => {
        pagesNumber <=1 ? pagesNumber = 1 : 
        setPagesNumber(pagesNumber - 1)
        }
        
    const incrementLanguajes = () => {
        setPagesLanguaje(pagesLanguaje + 1)
    }

    const decrementLanguajes = () => {
        pagesLanguaje <=1 ? pagesLanguaje = 1 : 
        setPagesLanguaje(pagesLanguaje - 1)
    }

    return (
        <div className="col-10">
            <div className="container mt-3 p-4 px-4 form-control border-dark border-3">
                Número de páginas <button 
                    className="btn btn-warning btn-sm fw-bold " onClick={incrementPages}> + </button> <span> {pagesNumber} </span>  <button className="btn btn-warning btn-sm fw-bold" onClick={decrementPages}>-</button>
                    {/* <input 
                    type="number" className="h6 my-2" name="pagesNumber" 
                    value={pagesNumber} onChange={(e) => handlePages(e.target.value)} />  */}
                
                <br></br>

                Número de idiomas <button 
                className="btn btn-warning btn-sm fw-bold" onClick={incrementLanguajes}>+</button> <span> {pagesLanguaje} </span> <button className="btn btn-warning btn-sm fw-bold" onClick={decrementLanguajes}>-</button>
            </div>
        </div>)

}

{/* <input 
                type="number" className="h6 mt-2" name="pagesLanguaje" 
                value={pagesLanguaje} onChange={(e) => handleLanguajes(e.target.value)} /> */}

export default Web;