
const ListBudget = ({ budget }) => {


    return (

        <>
            {budget.map((item, index) => {

                return (
                    <>
                        <div>
                           
                            <h6> <b>Presupuesto {index + 1}: </b></h6>
                            <p> <b>Nombre del presupuesto: </b> {item.budgetName} <br></br>
                                Nombre del cliente: {item.costumerName} <br></br>
                                Servicio de Web: {item.checkweb ? "Si " + " " + "   Páginas: " + item.pagesNumber + ", " + "Idiomas: " + item.pagesLanguaje : "No"} <br></br>
                                Servicio de Seo: {item.checkseo ? "Si" : "No"} <br></br>
                                Servicio de Google Ads:  {item.checkads ? "Si" : "No"}<br></br>
                                Precio total: {item.total} €  <br></br>

                            </p>
                        </div>
                    </>
                )
            })}
        </>

    )
}


export default ListBudget;

// return (
    //     <div>
    //         <h4>Resumen presupuesto: </h4>
    //         <p>
    //            {budget.budgetName}
    //         </p>
    //     </div>
    // );