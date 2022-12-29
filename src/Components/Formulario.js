import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment, useRef } from "react";
import { useState, useEffect } from "react";
import  Web  from './Web'

let totalWeb = 0

const Formulario = () => {

  const [checkweb, setCheckweb] = useState(false)
  const [checkseo, setCheckseo] = useState(false)
  const [checkads, setCheckads] = useState(false)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [pagesLanguaje, setPagesLanguaje] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(calcular())
  }, [checkweb, checkseo, checkads, pagesNumber, pagesLanguaje])

  function handleCheckweb(control) {
    if (control.checked) {
      setCheckweb(true)
    } else {
      setCheckweb(false)
    }
  }

  useEffect (() => {
    console.log("cambio")
  }, [checkweb,checkseo,checkads,pagesNumber,pagesLanguaje])

  function handleCheckseo(control) {
    if (control.checked) {
      setCheckseo(true)
    } else {
      setCheckseo(false)
    }
  }

  function handleChecksads(control) {
    if (control.checked) {
      setCheckads(true)
    } else {
      setCheckads(false)
    }
  }

  function handlePages(pagesInformation) {
    pagesInformation < 1 ? pagesInformation = 1 :
      setPagesNumber(parseInt(pagesInformation))
  }

  function handleLanguajes(LanguajeInformation) {
    LanguajeInformation < 1 ? LanguajeInformation = 1 :
      setPagesLanguaje(parseInt(LanguajeInformation))
  }

  function calcular() {
    let precioWeb, precioSeo, precioAds = 0
    checkweb ? (precioWeb = 500 + (pagesNumber * pagesLanguaje * 30)) : precioWeb = 0
    checkseo ? precioSeo = 300 : precioSeo = 0
    checkads ? precioAds = 200 : precioAds = 0
    // console.log(totalWeb)
    return precioWeb + precioSeo + precioAds
  }

  return (
    <Fragment>
      <h4>¿Qué quieres hacer?</h4>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="web" checked={checkweb} name="web" value={500} onChange={(e) => handleCheckweb(e.target)} />
        <label className="form-check-label">
          Una página web (500€)
        </label>
      </div>
      <div>
        { checkweb ? <Web pagesLanguaje={pagesLanguaje} pagesNumber={pagesNumber} setPagesNumber={setPagesNumber} setPagesLanguaje={setPagesLanguaje}> </Web> : null } 
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="seo" checked={checkseo} value={300} name="seo" onChange={(e) => handleCheckseo(e.target)} />
        <label className="form-check-label" >
          Una consultoria SEO (300€)
        </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="googleAdds" checked={checkads} value={200} name="googleAdds" onChange={(e) => handleChecksads(e.target)} />
        <label className="form-check-label" >
          Una campaña de Google Ads (200€)
        </label>
      </div>
      <div className="mt-3">
        Precio: {total} €
      </div>
    </Fragment>
  );
}

export default Formulario;