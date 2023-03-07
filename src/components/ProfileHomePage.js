import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TbChevronRight } from "react-icons/tb";
import ToDo from "./ToDo";
import Posts from "./Posts";
import Gallery from "./Gallery";
import ChatWidget from "./ChatWidget";
const ProfileHomePage = () => {
    // inbuilt hooks
    const location = useLocation();
    const navigate = useNavigate();

    //useState
    const [user, setUser] = useState(location.state.user);
    const [users, setUsers] = useState(location.state.users);

    const [activeState, setActiveState] = useState("Profile");
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [chatUserBox, setChatUserBox] = useState(false);

    //functions
    //on click signout button navigate user to Landing Page
    const handleSignOut = () => {
        navigate("/");
    };

    //on click anywhere on container all popup hides
    const handleHidePopup = () => {
        setShowPopup(false);
        setChatUserBox(false);
        setShow(false);
    };
    return (
        <div className="container" onClick={handleHidePopup}>
            <div className="row mt-5">
                <div className="col-2 aside">
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

                <div className="col-10 aside-right "> 
                    <div className='ms-4'>
                        <div className="d-flex justify-content-between ">
                            <h5 className="mt-2  fs-2 text-dark">{activeState}</h5>
                            <div
                                className="d-flex cursor-pointer position-relative"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPopup(!showPopup);
                                    setShow(false);
                                }}
                            >
                                <span>
                                    <img
                                        src={user.profilepicture}
                                        alt=""
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-2"
                                    />
                                </span>
                                <h6 className="mt-2 fs-4 text-dark">{user.name}</h6>
                            </div>
                            {showPopup && (
                                <div className="profile-model text-center">
                                    <img
                                        src={user.profilepicture}
                                        alt=""
                                        width={80}
                                        height={80}
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                        className="mx-2 my-3"
                                    />
                                    <h6 className="mt-2 fs-4 text-dark">{user.name}</h6>
                                    <span style={{ color: "#c0b8b8", fontSize: "16px" }}>
                                        {user.email}
                                    </span>

                                    {users
                                        .filter((newuser) => newuser.name !== user.name)
                                        .slice(0, 2)
                                        .map((newuser, index) => (
                                            <>
                                                <hr />
                                                <div
                                                    key={index}
                                                    className="cursor-pointer my-1 d-flex justify-content-center"
                                                    style={{ fontSize: "16px", color: "#4a4949" }}
                                                    onClick={() => setUser(newuser)}
                                                >
                                                    <img
                                                        src={newuser.profilepicture}
                                                        alt=""
                                                        width={30}
                                                        height={30}
                                                        style={{
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                        }}
                                                        className="mx-2"
                                                    />
                                                    <span>{newuser.name}</span>
                                                </div>
                                            </>
                                        ))}

                                    <button
                                        type="button"
                                        className="btn btn-danger  rounded-pill fw-bold p-2 mx-2  mt-4"
                                        style={{ fontSize: "15px", width: "90px" }}
                                        onClick={handleSignOut}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>

                        <hr  />
                        {activeState === "Profile" && (
                            <div className="row mt-5 aside-right-bottom">
                                <div className="col-5  ">
                                    {" "}
                                    <div className="container ">
                                        <div style={{ margin: "0 60px" }}>
                                            <img
                                                src={user.profilepicture}
                                                alt=""
                                                width={190}
                                                height={190}
                                                style={{ borderRadius: "50%", objectFit: "cover" }}
                                            />
                                        </div>

                                        <h5
                                            className="d-block  my-2  fs-2 text-black "
                                            style={{ margin: "0 80px" }}
                                        >
                                            {user.name}
                                        </h5>

                                        <div className="row">
                                            <div
                                                className="col-4 "
                                                style={{
                                                    textAlign: " -webkit-right",
                                                    lineHeight: "1.8",
                                                }}
                                            >
                                                <span className="fs-4 text-muted ">
                                                    &nbsp;Username &nbsp; :
                                                </span>
                                                <span className="fs-4 text-muted">
                                                    &nbsp;email &nbsp; :
                                                </span>
                                                <span className="fs-4 text-muted">
                                                    &nbsp;phone &nbsp; :
                                                </span>
                                                <span className="fs-4 text-muted">
                                                    &nbsp;website &nbsp; :
                                                </span>
                                            </div>
                                            <div
                                                className="col-8"
                                                style={{ textAlign: "left", lineHeight: "1.8" }}
                                            >
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.username}
                                                </span>
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.email}
                                                </span>
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.phone}
                                                </span>
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.website}
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <h4
                                            className="text-secondary d-block  "
                                            style={{ margin: "0 102px" }}
                                        >
                                            Company
                                        </h4>
                                        <div className="row">
                                            <div
                                                className="col-4"
                                                style={{
                                                    textAlign: " -webkit-right",
                                                    lineHeight: "1.8",
                                                }}
                                            >
                                                <span className="fs-4 text-muted">
                                                    &nbsp;Name &nbsp; :
                                                </span>
                                                <span className="fs-4 text-muted">
                                                    &nbsp;catchphrase &nbsp;:
                                                </span>
                                            </div>
                                            <div
                                                className="col-8"
                                                style={{ textAlign: "left", lineHeight: "1.8" }}
                                            >
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.company.name}
                                                </span>
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.company.catchPhrase}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div
                                                className="col-4"
                                                style={{ textAlign: "-webkit-right" }}
                                            >
                                                <span className="fs-4 text-muted">
                                                    &nbsp;bs &nbsp; :
                                                </span>
                                            </div>
                                            <div className="col-8" style={{ textAlign: "left" }}>
                                                <span className="fs-4 text-dark fw-bold">
                                                    {user.company.bs}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1">
                                    <div className="vl"></div>
                                </div>

                                <div className="col-6">
                                    <div className="row">
                                        {" "}
                                        <span className=" fs-3 text-secondary "> Address:</span>
                                    </div>
                                    <div className="row">
                                        <div
                                            className="col-4"
                                            style={{ textAlign: " -webkit-right" }}
                                        >
                                            <span className="fs-4 text-muted">
                                                &nbsp; Street &nbsp; :
                                            </span>
                                            <span className="fs-4 text-muted">
                                                &nbsp; Suite &nbsp; :
                                            </span>
                                            <span className="fs-4 text-muted">
                                                &nbsp; City &nbsp; :
                                            </span>
                                            <span className="fs-4 text-muted">
                                                &nbsp; Zipcode &nbsp; :
                                            </span>
                                        </div>
                                        <div className="col-8" style={{ textAlign: "left" }}>
                                            <span className="fs-4 text-dark fw-bold">
                                                {user.address.street}
                                            </span>
                                            <span className="fs-4 text-dark fw-bold">
                                                {user.address.suite}
                                            </span>
                                            <span className="fs-4 text-dark fw-bold">
                                                {user.address.city}
                                            </span>
                                            <span className="fs-4 text-dark fw-bold">
                                                {user.address.street}
                                            </span>
                                            <span className="fs-4 text-dark fw-bold">
                                                {user.address.zipcode}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <iframe
                                            src={`https://maps.google.com/maps?q=' +${user.address.geo.lat} + ',' +${user.address.geo.lng}+'&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                            style={{ borderRadius: "20px", height: "300px" }}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end my-2">
                                        <div className="fs-5 text-muted d-flex">
                                            &nbsp; Lat :{" "}
                                            <span className="fw-bold">{user.address.geo.lat}</span>
                                            &nbsp;
                                        </div>
                                        <div className="fs-5 text-muted d-flex">
                                            &nbsp; Long :
                                            <span className="fw-bold">
                                                &nbsp;{user.address.geo.lng}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {activeState === "ToDo" && <ToDo />}
                    {activeState === "Posts" && <Posts />}
                    {activeState === "Gallery" && <Gallery />}
                </div>
            </div>

            {/* {  display chat widget in row and fixed at bottom of profile page} */}
            <div className="row">
                <ChatWidget
                    users={users}
                    show={show}
                    setShow={setShow}
                    setShowPopup={setShowPopup}
                    chatUserBox={chatUserBox}
                    setChatUserBox={setChatUserBox}
                />
            </div>
        </div>
    );
};

export default ProfileHomePage;
