import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment, useRef } from "react";
import { useState } from "react";

let total = 0

const Formulario = () => {

  const [checkweb, setCheckweb] = useState(false)
  const [checkseo, setCheckseo] = useState(false)
  const [checkads, setCheckads] = useState(false)
  const [pagesNumber, setPagesNumber] = useState()
  const [pagesLanguaje, setPagesLanguaje] = useState()

  function handleCheckweb(myChecked) {
    if (myChecked.name == "web") {
      setCheckweb(myChecked.checked)
      myChecked.checked ? total += Number(myChecked.value) : total -= Number(myChecked.value)
    }
  }

  function handleCheckseo(myChecked) {
    if (myChecked.name == "seo") {
      setCheckseo(myChecked.checked)
      myChecked.checked ? total += Number(myChecked.value) : total -= Number(myChecked.value)
    }
  }

  function handleChecksads(myChecked) {
    if (myChecked.name == "googleAdds") {
      setCheckads(myChecked.checked)
      myChecked.checked ? total += Number(myChecked.value) : total -= Number(myChecked.value)
    }
  }

  function handlePages(pagesInformation) {
    if (pagesInformation.name == "pagesNumber") {
      setPagesNumber(pagesInformation.value)
    } if (pagesInformation.name == "pagesLanguaje") {
      setPagesLanguaje(pagesInformation.value)
    }
    total += Number(setPagesNumber * setPagesLanguaje * 30)
  }


  return (
    <Fragment>
      <h4>¿Qué quieres hacer?</h4>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="web" checked={checkweb} value={500} name="web" onChange={(e) => handleCheckweb(e.target)} />
        <label className="form-check-label">
          Una página web (500€)
        </label>
      </div>
      <div className="col-10">
        <div className="container mt-3 p-4 px-4 form-control border-dark border-3">
          Número de páginas <input type="number" className="h6 my-2" name="pagesNumber" value={30} onChange={(e) => handlePages(e.target)} />
          <br></br>

          Número de idiomas <input type="number" className="h6 mt-2" name="pagesLanguaje" value={30} onChange={(e) => handlePages(e.target)} />
        </div>
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
        Precio: ${total} €
      </div>
    </Fragment>
  );
}

export default Formulario;