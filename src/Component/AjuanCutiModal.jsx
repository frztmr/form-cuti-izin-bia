import React from "react";
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
// } from '@chakra-ui/react'

const AjuanCutiModal = (props) => {



    return (
        <div className="container">
            <div class=" " tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold"
                                id="modalVerticallyCenteredLabel"
                            >
                                Cuti
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">



                            <div className="text-start col-12 ">
                                {/* <p>Tanggal Meninggalkan Pekerjaan</p>
                                <p>Jumlah Ketidakhadiran</p> */}
                                <p>Alasan Ketidakhadiran</p>
                            </div>

                            <div className="">
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="radio"
                                            id="html"
                                            name="alasan"
                                            value="HTML" />
                                        <label for="CutiTahunan">
                                            <p className="p">
                                                Cuti Tahunan
                                            </p>
                                        </label>
                                        <br />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="radio"
                                            id="html"
                                            name="alasan"
                                            value="Sakit" />
                                        <label for="Sakit">
                                            <p className="p">
                                                Sakit
                                            </p>
                                        </label>
                                        <br />
                                    </div>

                                </div>
                            </div>




                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Batal</button>
                            <button type="button" class="btn btn-primary">Ajukan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjuanCutiModal;