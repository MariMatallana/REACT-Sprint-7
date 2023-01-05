import React from 'react'

export function Popup({num, text}) {



    return (
        <>
            <button
                type="button"
                className="btn btn-secondary btn-sm rounded-circle ms-1  px-2"
                data-bs-toggle="modal"
                data-bs-target={'#'+text}
            >
                i
            </button>
            <div
                className="modal fade"
                id={text}
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">Se han pedido: {num} {text} </div>
                    </div>
                </div>

            </div>
        </>



    )
}

