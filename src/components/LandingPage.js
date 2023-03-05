import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then((res) => {
            console.log(res.data);
            setUsers(res.data.users);
        });
    }, []);

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-4 "></div>
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                <h4 className="text-center my-3">Select an account</h4>
                            </div>
                        </div>
                        <div
                            className="card-body "
                            style={{ maxHeight: "300px", overflowY: "scroll" }}
                        >
                            {users.map((user) => (
                                <>
                                    <Link
                                        key={user.id}
                                        className="d-flex  text-decoration-none text-black"
                                        to={`/${user.id}/profile`}
                                        state={{ user }}
                                    >
                                        <img
                                            src={user.profilepicture}
                                            alt=""
                                            width={30}
                                            height={30}
                                            style={{ borderRadius: "50%" }}
                                            className="mx-2"
                                        />
                                        <h6>{user.name}</h6>
                                    </Link>
                                    <hr />
                                </>
                            ))}
                        </div>
                        <div className="card-footer" style={{ minHeight: "40px" }}></div>
                    </div>
                </div>
                <div className="col-md-4 "></div>
            </div>
        </div>
    );
};

export default LandingPage;
