import React from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const LoginPage = () => {

    const [nik, setNik] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState('password')

    const onVisibility = () => {
        if (visible == "password") {
            setVisible("text")

        } else if (visible == "text") {
            setVisible("password")
        }
    }

    return (
        <div className="container p-5">
            <div className="card">
                <div className="card-body shadow ">
                    <div className="row" >
                        <div className="col-6 text-start m-auto p-5">
                            <h2 className="fw-bold ">
                                Aplikasi
                                Cuti, Izin,
                                dan
                                Perbaikkan Waktu Kehadiran
                            </h2>

                        </div>
                        <div className="col-6 form-login">
                            <div className="card bg-white my-1 w-10 p-5 m-auto shadow">
                                <div className="mt-3 mb-4">
                                    <label className=" fw-bold text-muted" >
                                        Email
                                    </label>
                                    <input type='email'
                                        className="form-control p-3"
                                        placeholder="Nomor Induk Karyawan"
                                        onChange={(e) => setNik(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className=" fw-bold text-muted " >
                                        Password
                                    </label>
                                    <div className="input-group border rounded">
                                        <input type={visible}
                                            className=" text-start form-control p-3 border-0"
                                            onChange={((e) => setPassword(e.target.value))}
                                        />
                                        <span
                                            onClick={onVisibility}
                                            className="input-group-text bg-light border-0  px-3"
                                            id="basicaddon2">
                                            {
                                                visible == "password"
                                                    ?
                                                    <AiOutlineEye size={26} />
                                                    :
                                                    <AiOutlineEyeInvisible size={26} />
                                            }
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary py-3 shadow mt-3"
                                    type="button"
                                // onClick={onLogin}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;