import React from "react";


const StatusPengajuanCard = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4 py-3">
                    <div className=
                        "card border-primary w-100 shadow-sm ">
                        <div className=
                            "card-header border-primary bg-primary">
                            <h5 className="fw-bold text-white">
                                nama_pengguna
                            </h5>
                        </div>
                        <div className="card-body">
                            <h1 className="fw-bold">Mengajukan cuti</h1><br />
                            <h1 className="card-title">tanggal</h1>
                            <h1 className="card-title">Open for more</h1>
                        </div>
                        <div class="card-footer border-primary">
                            <div className="row">
                                <div className="col-6">

                                </div>
                                <div className="col-6">
                                    <div
                                        className=" btn-group d-flex justify-content-end">
                                        {/* <div className=""> */}
                                        <button
                                            className=
                                            "btn btn-danger mx-1 shadow"
                                            type="button"
                                            style={{
                                                border: '1px solid gray'
                                            }}
                                        // onClick={() => Navigate('/register')}
                                        >
                                            <p className=" fw-bold">
                                                Tolak</p>
                                        </button>
                                        {/* </div> */}
                                        {/* <div className="col-4 ms-5"> */}
                                        <button
                                            className="btn btn-warning mx-1 shadow"
                                            type="button"
                                            style={{ border: '1px solid gray' }}
                                        // onClick={() => Navigate('/register')}
                                        >
                                            <p className=" fw-bold">
                                                Setujui
                                            </p>
                                        </button>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 py-3">
                    <div className=
                        "card border-primary w-100 shadow-sm ">
                        <div className=
                            "card-header border-primary bg-primary">
                            <h5 className="fw-bold text-white">
                                nama_pengguna
                            </h5>
                        </div>
                        <div className="card-body">
                            <h1 className="fw-bold">Mengajukan cuti</h1><br />
                            <h1 className="card-title">tanggal</h1>
                            <h1 className="card-title">Open for more</h1>
                        </div>
                        <div class="card-footer border-primary">
                            <div className="row">
                                <div className="col-6">

                                </div>
                                <div className="col-6">
                                    <div
                                        className=" btn-group d-flex justify-content-end">
                                        {/* <div className=""> */}
                                        <button
                                            className=
                                            "btn btn-danger mx-1 shadow"
                                            type="button"
                                            style={{
                                                border: '1px solid gray'
                                            }}
                                        // onClick={() => Navigate('/register')}
                                        >
                                            <p className=" fw-bold">
                                                Tolak</p>
                                        </button>
                                        {/* </div> */}
                                        {/* <div className="col-4 ms-5"> */}
                                        <button
                                            className="btn btn-warning mx-1 shadow"
                                            type="button"
                                            style={{ border: '1px solid gray' }}
                                        // onClick={() => Navigate('/register')}
                                        >
                                            <p className=" fw-bold">
                                                Setujui
                                            </p>
                                        </button>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusPengajuanCard;