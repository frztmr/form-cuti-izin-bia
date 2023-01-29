import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const PerbaikanKehadiranModal = () => {

    return (
        <div id="PerbaikanKehadiranModal">
            <div className="container">
                <div class=" " tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h5 class="modal-title fw-bold text-white"
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

                                <div className="text-start col-12 pb-3 d-flex justify-content-center fw-bold">
                                    {/* <p>Tanggal Meninggalkan Pekerjaan</p>
                                <p>Jumlah Ketidakhadiran</p> */}
                                    <p>Alasan Ketidakhadiran</p>
                                </div>

                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-start">
                                                <p>
                                                    Tanggal
                                                </p>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="d-flex flex-row">
                                                <div className="form-check">
                                                    <input classname="form-check-input"
                                                        type="radio"
                                                        name="alasan"
                                                        id="Sakit" />
                                                    <label className="form-check-label"
                                                        for="Sakit">
                                                        <p className="px-2">
                                                            Sakit
                                                        </p>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="list-group-item">
                                            <p className="px-2 d-flex justify-content-start">
                                                Alasan Lain
                                            </p>
                                            <div className="input-group px-3 pt-2 ">
                                                <div className="input-group-text ">
                                                    <input className="form-check-input" type="radio" name='alasan' value="" aria-label="Radio for following text input" />
                                                </div>
                                                <input type="text" className="form-control pt-2" aria-label="Text input with radio" placeholder="isi alasan anda di sini" />
                                            </div>
                                        </li>
                                    </ul>
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
        </div>
    )
}

export default PerbaikanKehadiranModal;