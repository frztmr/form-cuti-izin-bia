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

import { Select } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'


const PerbaikanKehadiranModal = () => {

    return (
        <div>
            <div className="container">
                {/* <div className=" " tabindex="-1"> */}
                <div className="card border-primary mt-5 shadow">

                    {/* <div className="modal-content"> */}
                    <div class="modal-header bg-primary">


                        <h5 class="card-title fw-bold text-white">
                            Perbaikkan Waktu Kehadiran
                        </h5>

                        <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>

                    </div>

                    <div class="card-body">

                        <div className="card  border-primary">
                            <ul className="list-group list-group-flush  border-primary shadow-sm">
                                <li className="list-group-item fw-bold border-primary">
                                    <div className="row mb-3">

                                        <div className="d-flex justify-content-start ">
                                            Tanggal
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <Select placeholder='tgl'
                                                    className="border-primary shadow-sm">
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                    <option value='9'>9</option>
                                                    <option value='10'>10</option>
                                                    <option value='11'>11</option>
                                                    <option value='12'>12</option>
                                                    <option value='13'>13</option>
                                                    <option value='14'>14</option>
                                                    <option value='15'>15</option>
                                                    <option value='16'>16</option>
                                                    <option value='17'>17</option>
                                                    <option value='18'>18</option>
                                                    <option value='19'>19</option>
                                                    <option value='20'>20</option>
                                                    <option value='21'>21</option>
                                                    <option value='22'>22</option>
                                                    <option value='23'>23</option>
                                                    <option value='24'>24</option>
                                                    <option value='25'>25</option>
                                                    <option value='26'>26</option>
                                                    <option value='27'>27</option>
                                                    <option value='28'>28</option>
                                                    <option value='29'>29</option>
                                                    <option value='30'>30</option>
                                                    <option value='31'>31</option>
                                                </Select>
                                            </div>
                                            <div className="col-6">
                                                <Select placeholder='bulan'
                                                    className="border-primary shadow-sm"
                                                >
                                                    <option value='Januari'>Januari</option>
                                                    <option value='Februari'>Februari</option>
                                                    <option value='Maret'>Maret</option>
                                                    <option value='April'>April</option>
                                                    <option value='Mei'>Mei</option>
                                                    <option value='Juni'>Juni</option>
                                                    <option value='Juli'>Juli</option>
                                                    <option value='Agustus'>Agustus</option>
                                                    <option value='September'>September</option>
                                                    <option value='Oktober'>Oktober</option>
                                                    <option value='November'>November</option>
                                                    <option value='Desember'>Desember</option>
                                                </Select>
                                            </div>
                                            <div className="col-3">
                                                <Select placeholder='thn'
                                                    className="border-primary shadow-sm"
                                                >
                                                    <option value='2022'>2022</option>
                                                    <option value='2023'>2023</option>
                                                    <option value='2024'>2024</option>
                                                    <option value='2025'>2025</option>

                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item  border-primary" >
                                    <div className="fw-bold d-flex justify-content-start">
                                        Waktu Hadir
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <Select placeholder='pilih waktu hadir'
                                                className="border-primary shadow-sm">
                                                <option value='09:00'>09:00</option>
                                                <option value='09:30'>09:30</option>
                                                <option value='10:00'>10:00</option>
                                                <option value='10:30'>10:30</option>
                                                <option value='11:00'>11:00</option>
                                                <option value='11:30'>11:30</option>
                                                <option value='12:00'>12:00</option>
                                                <option value='12:30'>12:30</option>
                                                <option value='13:00'>13:00</option>
                                                <option value='13:30'>13:30</option>
                                                <option value='14:00'>14:00</option>
                                                <option value='14:30'>14:30</option>
                                                <option value='15:00'>15:00</option>
                                                <option value='15:30'>15:30</option>
                                                <option value='16:00'>16:00</option>
                                            </Select>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item border-primary">
                                    <div className="fw-bold d-flex justify-content-start">
                                        Waktu Pulang
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <Select placeholder='pilih waktu hadir'
                                                className="border-primary">
                                                <option value='09:00'>09:00</option>
                                                <option value='09:30'>09:30</option>
                                                <option value='10:00'>10:00</option>
                                                <option value='10:30'>10:30</option>
                                                <option value='11:00'>11:00</option>
                                                <option value='11:30'>11:30</option>
                                                <option value='12:00'>12:00</option>
                                                <option value='12:30'>12:30</option>
                                                <option value='13:00'>13:00</option>
                                                <option value='13:30'>13:30</option>
                                                <option value='14:00'>14:00</option>
                                                <option value='14:30'>14:30</option>
                                                <option value='15:00'>15:00</option>
                                                <option value='15:30'>15:30</option>
                                                <option value='16:00'>16:00</option>
                                            </Select>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item border-primary mb-3">
                                    <p className="fw-bold d-flex justify-content-start px-2">
                                        Alasan Perbaikkan Waktu Kehadiran
                                    </p>

                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Tidak Membawa ID card"
                                            id="Tidak Membawa ID card"
                                        />

                                        <label className="form-check-label"
                                            for="Tidak Membawa ID card">
                                            <p className="px-2">
                                                Tidak Membawa ID card
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Lupa mencatatkan waktu kehadiran/kepulangan"
                                            id="Lupa mencatatkan waktu kehadiran/kepulangan"
                                        />

                                        <label className="form-check-label"
                                            for="Lupa mencatatkan waktu kehadiran/kepulangan">
                                            <p className="px-2">
                                                Lupa mencatatkan waktu kehadiran/kepulangan
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Belum Memiliki ID card"
                                            id="Belum Memiliki ID card"
                                        />

                                        <label className="form-check-label"
                                            for="Belum Memiliki ID card">
                                            <p className="px-2">
                                                Belum Memiliki ID card
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="ID card rusak"
                                            id="ID card rusak"
                                        />

                                        <label className="form-check-label"
                                            for="ID card rusak">
                                            <p className="px-2">
                                                ID card rusak
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Kerusakan mesin absensi"
                                            id="Kerusakan mesin absensi"
                                        />

                                        <label className="form-check-label"
                                            for="Kerusakan mesin absensi">
                                            <p className="px-2">
                                                Kerusakan mesin absensi
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Sidik jari tidak terbaca mesin absen"
                                            id="Sidik jari tidak terbaca mesin absen"
                                        />

                                        <label className="form-check-label"
                                            for="Sidik jari tidak terbaca mesin absen">
                                            <p className="px-2">
                                                Sidik jari tidak terbaca mesin absen
                                            </p>
                                        </label>
                                    </div>

                                    <div class="input-group px-2">
                                        <div class="input-group-text">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                aria-label="Checkbox for following text input"
                                            />
                                        </div>
                                        <input type="text"
                                            className="form-control"
                                            aria-label="Text input with checkbox"
                                            placeholder="Dinas luar ke:"
                                        />
                                    </div>
                                    {/* <div className="form-check d-flex justify-content-start">
                                        <input classname="form-check-input"
                                            type="checkbox"
                                            name="alasan"
                                            value="Tidak Membawa ID card"
                                            id="Tidak Membawa ID card"
                                        />

                                        <label className="form-check-label"
                                            for="Tidak Membawa ID card">

                                        </label>
                                    </div> */}
                                </li>

                            </ul>
                        </div>


                    </div>
                    <div class="card-footer ">
                        <div className=" d-flex justify-content-end ">
                            <div className=" ">
                                <button type="button" class="btn btn-secondary shadow d-flex justify-content-end m-1">Simpan</button>
                            </div>
                            <div className=" ">
                                <button type="button" class="btn btn-primary shadow d-flex justify-content-end m-1">Ajukan</button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* </div> */}
            </div>
        </div>

    )
}

export default PerbaikanKehadiranModal;