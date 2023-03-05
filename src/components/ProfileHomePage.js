import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import ToDo from "./ToDo";
import Posts from "./Posts";
import Gallery from "./Gallery";
import axios from "axios";
const ProfileHomePage = () => {


    const [users, setUsers] = useState([]);

    
    const location = useLocation();
    const navigate = useNavigate();
    const [activeState, setActiveState] = useState("Profile");
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then((res) => {
            console.log(res.data);
            setUsers(res.data.users);
        });
    }, []);
    
    const handleSignOut = () => {
        navigate("/");
    };
    console.log(location.state);
    return (
        <div className="container" onClick={() => setShowPopup(false)}>
            <div className="row mt-5">
                <div className="col-3 aside">
                    <div className="aside-list">
                        <span
                            className={
                                activeState === "Profile"
                                    ? "cursor-pointer active"
                                    : "cursor-pointer inactive"
                            }
                            onClick={() => setActiveState("Profile")}
                        >
                            Profile
                        </span>

                        {activeState === "Profile" && <TbChevronRight className="icon" />}
                    </div>
                    <hr />
                    <div className="aside-list">
                        <span
                            className={
                                activeState === "Posts"
                                    ? "cursor-pointer active"
                                    : "cursor-pointer inactive"
                            }
                            onClick={() => setActiveState("Posts")}
                        >
                            Posts
                        </span>

                        {activeState === "Posts" && <TbChevronRight className="icon" />}
                    </div>
                    <hr />
                    <div className="aside-list">
                        <span
                            className={
                                activeState === "Gallery"
                                    ? "cursor-pointer active"
                                    : "cursor-pointer inactive"
                            }
                            onClick={() => setActiveState("Gallery")}
                        >
                            Gallery
                        </span>

                        {activeState === "Gallery" && <TbChevronRight className="icon" />}
                    </div>
                    <hr />
                    <div className="aside-list">
                        <span
                            className={
                                activeState === "ToDo"
                                    ? "cursor-pointer active"
                                    : "cursor-pointer inactive"
                            }
                            onClick={() => setActiveState("ToDo")}
                        >
                            ToDo
                        </span>
                        {activeState === "ToDo" && <TbChevronRight className="icon" />}
                    </div>
                    <hr />
                </div>

                <div className="col-9">
                    <div>
                        <div className="d-flex justify-content-between">
                            <h4>{activeState}</h4>
                            <div
                                className="d-flex cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(!showPopup);
                                }}
                            >
                                <span>
                                    {" "}
                                    <img
                                        src={location.state.user.profilepicture}
                                        alt=""
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-2"
                                    />
                                </span>
                                <h6>{location.state.user.name}</h6>
                            </div>
                        </div>
                        {showPopup && (
                            <div className="profile-model text-center">
                                <img
                                    src={location.state.user.profilepicture}
                                    alt=""
                                    width={80}
                                    height={80}
                                    style={{ borderRadius: "50%", objectFit: "cover" }}
                                    className="mx-2 "
                                />
                                <span className="fw-bold">{location.state.user.name}</span>
                                <span className="text-secondary">{location.state.user.email}</span>
                                <hr />

                                <button
                                    className="btn btn-danger rounded-pill"
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        )}
                        <hr />
                        {activeState === "Profile" && (
                            <div className="row">
                                <div className="col-6">
                                    <img
                                        src={location.state.user.profilepicture}
                                        alt=""
                                        width={180}
                                        height={180}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-auto"
                                    />
                                    <h6 className="d-block mx-auto">{location.state.user.name}</h6>
                                    <span className="d-block ">
                                        Username:<h6>{location.state.user.username}</h6>
                                    </span>
                                    <span className="d-block ">
                                        email:<h6>{location.state.user.email}</h6>
                                    </span>
                                    <span className="d-block ">
                                        phone:<h6>{location.state.user.phone}</h6>
                                    </span>
                                    <span className="d-block ">
                                        website:
                                        <h6 className="fw-bold">{location.state.user.website}</h6>
                                    </span>
                                    <hr />
                                    <h5>Company</h5>
                                    <span className="d-block ">
                                        Name:<h6>{location.state.user.company.name}</h6>
                                    </span>
                                    <span className="d-block ">
                                        catchPhrase:
                                        <h6>{location.state.user.company.catchPhrase}</h6>
                                    </span>
                                    <span className="d-block ">
                                        bs:<h6>{location.state.user.company.bs}</h6>
                                    </span>
                                </div>
                                {/* <div className="vl"></div> */}

                                <div className="col-5">
                                    <span> Address:</span>
                                    <span>
                                        street:<h6>{location.state.user.address.street}</h6>
                                    </span>
                                    <span>
                                        suite:<h6>{location.state.user.address.suite}</h6>
                                    </span>
                                    <span>
                                        City:<h6>{location.state.user.address.city}</h6>
                                    </span>
                                    <span>
                                        Zipcode:<h6>{location.state.user.address.zipcode}</h6>
                                    </span>
                                    <iframe
                                        src={`https://maps.google.com/maps?q=' +${location.state.user.address.geo.lat} + ',' +${location.state.user.address.geo.lng}+'&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                    />
                                    Lat:{location.state.user.address.geo.lat} Long:
                                    {location.state.user.address.geo.lng}
                                    {/* <iframe
                                src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=en&z=14&amp;output=embed"
                                width="100%"
                                height="400"
                                frameborder="0"
                                style="border:0"
                                allowfullscreen
                            ></iframe> */}
                                </div>
                            </div>
                        )}
                    </div>

                    {activeState === "ToDo" && <ToDo />}
                    {activeState === "Posts" && <Posts />}
                    {activeState === "Gallery" && <Gallery />}
                </div>
            </div>
        </div>
    );
};

export default ProfileHomePage;
