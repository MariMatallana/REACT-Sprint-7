import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment, useRef } from "react";
import { useState } from "react";

let total = 0

const Formulario = () => {

  const [checkweb, setCheckweb] = useState(false)
  const [checkseo, setCheckseo] = useState(false)
  const [checkads, setCheckads] = useState(false)

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



  return (
    <Fragment>
      <h4>¿Qué quieres hacer?</h4>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" id="web" checked={checkweb} value={500} name="web" onChange={(e) => handleCheckweb(e.target)} />
        <label className="form-check-label">
          Una página web (500€)
        </label>
      </div>
      <div className="container mt-3 p-3 form-control border-dark"  width="100px">
        Numero de páginas <input type="text"/> 
        <br ></br>
        Numero de idiomas <input type="text"/>
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