import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Web from './Web';
import ListBudget from './ListBudget'

let data
let i = 0

const Formulario = () => {

  const [budgetName, setBudgetName] = useState('')
  const [costumerName, setCostumerName] = useState('')
  const [checkweb, setCheckweb] = useState(false)
  const [checkseo, setCheckseo] = useState(false)
  const [checkads, setCheckads] = useState(false)
  const [pagesNumber, setPagesNumber] = useState(1)
  const [pagesLanguaje, setPagesLanguaje] = useState(1)
  const [total, setTotal] = useState(0)
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('Information')) ?? [])
  // const [presupuesto, setPresupuesto] = useState([])
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  function printData() {
    setCheckweb(budget[0].Web)
    setCheckseo(budget[0].Seo)
    setCheckads(budget[0].Ads)
    setPagesNumber(budget[0].PagesNumber)
    setPagesLanguaje(budget[0].PagesLanguaje)
  }

  useEffect(() => {
    setTotal(calcular())
  }, [checkweb, checkseo, checkads, pagesNumber, pagesLanguaje])

  useEffect(() => {
    localStorage.setItem('Information', JSON.stringify(budget))
  }, [budget])


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

  let i = 0
  let key
  function save() {

    setBudget([...budget, { budgetName, costumerName, checkweb, pagesNumber, pagesLanguaje, checkseo, checkads, date, total }])

    reset()

  }

  function reset() {
    setCheckweb(false)
    setCheckseo(false)
    setCheckads(false)
    setPagesNumber(1)
    setPagesLanguaje(1)
    setBudgetName("")
    setCostumerName("")
  }


  return (
    <Fragment>
      <div className="row">
        <div className="col-6">
          <h4>¿Qué quieres hacer?</h4>
          <p className='mt-3' />Nombre del presupuesto:
          <input className='ms-2' type='text' name="NombrePresupuesto" onChange={(e) => setBudgetName(e.target.value)} value={budgetName}></input>
          <p className='mt-3' />Cliente:
          <input className='ms-2' type='text' name="NombreCliente" onChange={(e) => setCostumerName(e.target.value)} value={costumerName}></input>

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
            Precio: {total} € <br></br>
          </div>
          <button className="mt-3 btn btn-warning btn-sm" onClick={save}> Guardar </button>
          <br></br>
          <br></br>
        </div>
        <div className="col-md-6 col-sm-12" >
         <ListBudget  budget={budget} ></ListBudget> 
        </div>
      </div>
    </Fragment>
  );
}

export default Formulario;