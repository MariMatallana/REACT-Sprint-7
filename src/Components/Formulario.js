import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Web from './Web'
import { Popup } from './Popup'

let data

const Formulario = () => {

  const [budgetName, setBudgetName] = useState('')
  const [costumerName, setCostumerName] = useState('')
  const [checkweb, setCheckweb] = useState(false)
  const [checkseo, setCheckseo] = useState(false)
  const [checkads, setCheckads] = useState(false)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [pagesLanguaje, setPagesLanguaje] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    data = JSON.parse(localStorage.getItem('allInformation'))
    data ? printData(data) : console.log("")
  }, [])

  function printData() {
    setCheckweb(data[0].Web)
    setCheckseo(data[0].Seo)
    setCheckads(data[0].Ads)
    setPagesNumber(data[0].PagesNumber)
    setPagesLanguaje(data[0].PagesLanguaje)
  }

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

  function calcular() {
    let precioWeb, precioSeo, precioAds = 0
    checkweb ? (precioWeb = 500 + (pagesNumber * pagesLanguaje * 30)) : precioWeb = 0
    checkseo ? precioSeo = 300 : precioSeo = 0
    checkads ? precioAds = 200 : precioAds = 0
    return precioWeb + precioSeo + precioAds
  }

  function save() {

    let allInformation = JSON.parse(localStorage.getItem('allInformation') || '[]')
    let information = {
      nombrePresupuesto: budgetName,
      nombreCliente: costumerName,
      Web: checkweb,
      Seo: checkseo,
      Ads: checkads,
      PagesNumber: pagesNumber,
      PagesLanguaje: pagesLanguaje,
    }
    allInformation.push(information)
    localStorage.setItem('allInformation', JSON.stringify(allInformation))
    reset()
  }

  function reset() {
    setCheckweb(false)
    setCheckseo(false)
    setCheckads(false)
    setPagesNumber(1)
    setPagesLanguaje(1)
  }

  return (
    <Fragment>
      <h4>¿Qué quieres hacer?</h4>
      <p className='mt-3' />Nombre del presupuesto:
      <input className='ms-2' type='text' name="nombrePresupuesto" onChange={(e) => setBudgetName(e.target.value)}></input>
      <p className='mt-3' />Cliente:
      <input className='ms-2' type='text' name="nombreCliente" onChange={(e) => setCostumerName(e.target.value)}></input>

      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="web" checked={checkweb} name="web" value={500} onChange={(e) => handleCheckweb(e.target)} />
        <label className="form-check-label">
          Una página web (500€)
        </label>
      </div>
      <div>
        {checkweb ? <Web pagesLanguaje={pagesLanguaje} pagesNumber={pagesNumber} setPagesNumber={setPagesNumber} setPagesLanguaje={setPagesLanguaje}> </Web> : null}
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
      <button className="mt-3 btn btn-warning btn-sm" onClick={save}> Guardar </button>
    </Fragment>
  );
}

export default Formulario;