import React from "react";
import { Show, Hide } from "@chakra-ui/react";

const Navbar = (props) => {
    return (
        <div className="navbar navbar-expand-xl navbar-light bg-primary">
            <div className="container-fluid  m-auto w-100">
                <span className="navbar-brand btn ">
                    <span className="text-white fw-light ">
                        Formulir
                    </span>

                    <span className="text-white lead ms-1 fw-bold  ">
                        Cuti Izin 
                    </span>
                </span>

                <ul className="navbar-nav me-auto m-3   ">
                    {/* <li>
                        <span
                            className="nav-link active btn btn-light m-2 "
                        // onClick={() => navigate('/request')}
                        >
                            <p className="px-3 fw-bold">
                                Ajukan
                            </p>
                        </span>
                    </li> */}
                    {/* <li>
                        <span
                            className="nav-link active btn btn-light m-2  "
                        // onClick={() => navigate('/izinterlambat')}
                        >
                            <p className="m-1">
                                Izin Terlambat
                            </p>
                        </span>
                    </li>
                    <li>
                        <span
                            className="nav-link active btn btn-light m-2 "
                        // onClick={() => navigate('/waktuhadir')}
                        >
                            <p className="m-1">
                                Prbkn Wkt Hadir
                            </p>
                        </span>
                    </li> */}
                </ul>

                <div
                    className="d-flex"
                    id="avatar"
                >
                    <div className="btn-group">
                        <button
                            className="btn btn-light"
                            type="button"
                            style={{ border: '1px solid gray' }}
                        // onClick={() => Navigate('/register')}
                        >
                            <p className="mx-auto fw-bold">
                                Log In

                            </p>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Navbar;