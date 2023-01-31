import React from "react";
import Waiting from '../Component/WaitingListCard'

const HomePage = () => {

    return (
        <div className="container p-3">
            <div className="container-fluid">

                <div className="row pb-3">
                    <div className="col-12">
                        <div className="btn-group w-100 shadow" >
                            <button
                                className="btn btn-warning"
                                type="button"
                                style={{ border: '1px solid gray' }}
                            // onClick={() => Navigate('/register')}
                            >
                                <p className="mx-3 my-4 fw-bold">
                                    Ajukan Cuti

                                </p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="btn-group w-100 h-100 shadow">
                            <button
                                className="btn btn-warning"
                                type="button"
                                style={{ border: '1px solid gray' }}
                            // onClick={() => Navigate('/register')}
                            >
                                <p className="mx-auto fw-bold">
                                    Ajukan Izin Datang Terlambat

                                </p>
                            </button>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="btn-group w-100">
                            <button
                                className="btn btn-warning shadow"
                                type="button"
                                style={{ border: '1px solid gray' }}
                            // onClick={() => Navigate('/register')}
                            >
                                <p className="mx-auto fw-bold">
                                    Ajukan Perbaikkan Waktu Kehadiran
                                </p>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row p-3 ">
                <div className="col-12">
                    <div className="card border-primary row shadow shadow-light bg-">
                        <div className="card-header bg-primary fw-bold text-white">
                            Status Pengajuan Cuti
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {/* <div className="col-12 col-sm-6 py-3">
                                    <div className="card w-100 ">
                                        <div className="card-header">
                                            <h5 className="text-bold">
                                                Jumlah Cuti yang Akan Diambil
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">0</h1>
                                        </div>
                                        <div class="card-footer ">
                                            <h3>
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 py-3">
                                    <div className="card w-100 ">
                                        <div className="card-header">
                                            <h5 className="text-bold">
                                                Sisa per Januari 2023
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">12</h1>
                                        </div>
                                        <div class="card-footer ">
                                            <h3>
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div> */}
                                <h5 className="fst-italic text-muted">
                                    *Belum ada pengajuan cuti
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-3 ">
                <div className="col-12">
                    <div className="card border-primary row shadow bg-">
                        <div className="card-header fw-bold bg-primary text-white">
                            Rencana Pengambilan Cuti Tahunan
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-sm-6 py-3">
                                    <div className="card border-primary w-100 shadow-sm ">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Jumlah Cuti yang Akan Diambil
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">0</h1>
                                        </div>
                                        <div class="card-footer border-primary ">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 py-3">
                                    <div className="card border-primary w-100 shadow-sm">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Sisa per Januari 2023
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">12</h1>
                                        </div>
                                        <div class="card-footer border-primary">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" row p-3">
                <div className="col-12">
                    <div className="card border-primary row shadow">
                        <div className="card-header fw-bold bg-primary text-white">
                            Rencana Pengambilan Cuti Tahunan
                        </div>
                        <div className="card-body  ">
                            <div className="row">
                                <div className="col-12 col-sm-3 py-3">
                                    <div className="card border-primary w-100 shadow-sm">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Cuti Periode 2022
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">0</h1>
                                        </div>
                                        <div class="card-footer border-primary">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 py-3">
                                    <div className="card border-primary w-100 shadow-sm">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Cuti Periode 2023
                                            </h5>
                                        </div>
                                        <div className="card-body ">
                                            <h1 className="card-title">12</h1>
                                        </div>
                                        <div class="card-footer border-primary ">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 py-3">
                                    <div className="card border-primary w-100 shadow-sm">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Total 2022-2023
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">12</h1>
                                        </div>
                                        <div class="card-footer border-primary ">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 py-3">
                                    <div className="card border-primary w-100 shadow-sm ">
                                        <div className="card-header border-primary ">
                                            <h5 className="fw-bold">
                                                Cuti Yang Terpakai
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">1</h1>
                                        </div>
                                        <div class="card-footer border-primary">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-sm-12 py-2">
                                    <div className="shadow-sm card w-100 border-primary ">
                                        <div className="card-header border-primary">
                                            <h5 className="fw-bold">
                                                Sisa Cuti Periode 2023
                                            </h5>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">12</h1>
                                        </div>
                                        <div class="card-footer border-primary">
                                            <h3 className="fw-bold">
                                                Hari
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-">
                    CopyRight
                </div>
            </div>
        </div>
    )

}

export default HomePage;