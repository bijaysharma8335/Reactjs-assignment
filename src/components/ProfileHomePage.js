import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import ToDo from "./ToDo";
import Posts from "./Posts";
import Gallery from "./Gallery";
import axios from "axios";
import ChatWidget from "./ChatWidget";
const ProfileHomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state.user);
    const [users, setUsers] = useState([]);

    const [activeState, setActiveState] = useState("Profile");
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get("https://panorbit.in/api/users.json").then((res) => {
            setUsers(res.data.users);
        });
    }, []);

    const handleSignOut = () => {
        navigate("/");
    };
    const handleHidePopup = () => {
        setShowPopup(false);
        setShow(false);
    };
    return (
        <div
            className="container"
            onClick={handleHidePopup}

            // style={{ position: "relative" }}
        >
            <div className="row mt-5">
                <div className="col-3 aside">
                    <div className="aside-list ">
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

                        {activeState === "Profile" && (
                            <div className="div-icon">
                                <TbChevronRight className="icon" />
                            </div>
                        )}
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

                        {activeState === "Posts" && (
                            <div className="div-icon">
                                <TbChevronRight className="icon" />
                            </div>
                        )}
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

                        {activeState === "Gallery" && (
                            <div className="div-icon">
                                <TbChevronRight className="icon" />
                            </div>
                        )}
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
                        {activeState === "ToDo" && (
                            <div className="div-icon">
                                <TbChevronRight className="icon" />
                            </div>
                        )}
                    </div>
                   
                </div>

                <div className="col-9 aside-right">
                    <div>
                        <div className="d-flex justify-content-between">
                            <h4>{activeState}</h4>
                            <div
                                className="d-flex cursor-pointer position-relative"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(!showPopup);
                                    setShow(false);
                                }}
                            >
                                <span>
                                    {" "}
                                    <img
                                        src={user.profilepicture}
                                        alt=""
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-2"
                                    />
                                </span>
                                <h6 className="mt-2">{user.name}</h6>
                            </div>
                            {showPopup && (
                                <div className="profile-model text-center">
                                    <img
                                        src={user.profilepicture}
                                        alt=""
                                        width={80}
                                        height={80}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-2 "
                                    />
                                    <span className="fw-bold">{user.name}</span>
                                    <span className="">{user.email}</span>
                                    <hr />
                                    {users
                                        .filter((newuser) => newuser.name !== user.name)
                                        .slice(0, 2)
                                        .map((newuser, index) => (
                                            <>
                                                <span
                                                    key={index}
                                                    className="cursor-pointer my-1"
                                                    onClick={() => setUser(newuser)}
                                                >
                                                    {newuser.name}
                                                </span>
                                                <hr />
                                            </>
                                        ))}
                                    <button
                                        className="btn btn-danger rounded-pill"
                                        onClick={handleSignOut}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>

                        <hr />
                        {activeState === "Profile" && (
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img
                                        src={user.profilepicture}
                                        alt=""
                                        width={180}
                                        height={180}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-auto"
                                    />
                                    <h5 className="d-block mx-auto my-2">{user.name}</h5>
                                    <span className="d-block ">Username:{user.username}</span>
                                    <span className="d-block ">email:{user.email}</span>
                                    <span className="d-block ">phone:{user.phone}</span>
                                    <span className="d-block ">
                                        website:
                                        {user.website}
                                    </span>
                                    <hr />
                                    <h5>Company</h5>
                                    <span className="d-block ">Name:{user.company.name}</span>
                                    <span className="d-block ">
                                        catchPhrase:
                                        {user.company.catchPhrase}
                                    </span>
                                    <span className="d-block ">bs:{user.company.bs}</span>
                                </div>
                                {/* <div className="vl"></div> */}

                                <div className="col-5">
                                    <span className="fw-bold text-secondary"> Address:</span>
                                    <span>
                                        street:<h6>{user.address.street}</h6>
                                    </span>
                                    <span>
                                        suite:<h6>{user.address.suite}</h6>
                                    </span>
                                    <span>
                                        City:<h6>{user.address.city}</h6>
                                    </span>
                                    <span>
                                        Zipcode:<h6>{user.address.zipcode}</h6>
                                    </span>
                                    <iframe
                                        src={`https://maps.google.com/maps?q=' +${user.address.geo.lat} + ',' +${user.address.geo.lng}+'&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                    />
                                    Lat:{user.address.geo.lat} Long:
                                    {user.address.geo.lng}
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
            <div className="row">
                <ChatWidget
                    users={users}
                    show={show}
                    setShow={setShow}
                    setShowPopup={setShowPopup}
                />
            </div>
        </div>
    );
};

export default ProfileHomePage;
