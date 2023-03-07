import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [users, setUsers] = useState([]);

    //fetch data from api and update state users
    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then((res) => {
            setUsers(res.data.users);
        });
    }, []);

    return (
        <div className="container-fluid landingpage-container">
            <div className="row ">
                <div className="col-md-4 "></div>
                <div className="col-md-4 ">
                    <div className="card ">
                        <div className="card-header">
                            <div className="card-title">
                                <h3 className="text-center my-4">Select an account</h3>
                            </div>
                        </div>
                        <div
                            className="card-body "
                            style={{ maxHeight: "400px", overflowY: "scroll" }}
                        >
                            {users.map((user) => (
                                <>
                                    {/* { on click link it will navigate to currenyt user profile} */}
                                    <Link
                                        key={user.id}
                                        className="d-flex  text-decoration-none my-auto ms-3"
                                        to={`/${user.id}/profile`}
                                        state={{ user, users }}
                                    >
                                        <img
                                            src={user.profilepicture}
                                            alt=""
                                            width={30}
                                            height={30}
                                            style={{ borderRadius: "50%" }}
                                            className="mx-2"
                                        />
                                        <h4 className="mt-1">{user.name}</h4>
                                    </Link>
                                    <hr />
                                </>
                            ))}
                        </div>
                        <div className="card-footer" style={{ minHeight: "25px" }}></div>
                    </div>
                </div>
                <div className="col-md-4 "></div>
            </div>
        </div>
    );
};

export default LandingPage;
