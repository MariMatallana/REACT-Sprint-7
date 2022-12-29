import React, { Component } from "react";

const Web = (languaje, number, handlePages, handleLanguajes) => {

    return (
        <div className="col-10">
            <div className="container mt-3 p-4 px-4 form-control border-dark border-3">
                Número de páginas <button className="btn btn-warning btn-sm fw-bold " >+</button> <input type="number" className="h6 my-2" name="pagesNumber" value={number} onChange={(e) => handlePages(e.target.value)} /> <button className="btn btn-warning btn-sm fw-bold">-</button>
                <br></br>
                Número de idiomas <button className="btn btn-warning btn-sm fw-bold">+</button> <input type="number" className="h6 mt-2" name="pagesLanguaje" value={languaje} onChange={(e) => handleLanguajes(e.target.value)} /> <button className="btn btn-warning btn-sm fw-bold">-</button>
            </div>
        </div>)

}


export default Web;