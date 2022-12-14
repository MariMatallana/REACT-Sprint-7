import React, { Fragment } from "react";

const Formulario = () => {

//    const [total, setTotal] = useState({
//         check1: 500,
//         check2: 300,
//         check3: 200,
//    });

//    const actualizar = (event) => {
//     console.log("funciona")
//     setTotal({
//         ...total,
//     })
//    }

    return ( 
        <Fragment>
        <h4>¿Qué quieres hacer?</h4>
        <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" name="check1"/>
          <label className="form-check-label">
            Una página web (500€)
          </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" name="check2"/>
          <label clasName="form-check-label" >
          Una consultoria SEO (300€)
          </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" name="check3"/>
          <label className="form-check-label" >
          Una campaña de Google Ads (200€)
          </label>
      </div>
      <div className="mt-3">
        Precio: €
      </div>
        </Fragment>
    );
}

export default Formulario;