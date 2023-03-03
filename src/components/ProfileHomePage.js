import React from "react";
import { useLocation } from "react-router-dom";

const ProfileHomePage = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div className="container">
            <div className="row mt-5">
                <div
                    className="col-md-2 "
                    style={{
                        height: "90vh",
                        backgroundColor: "#6B00D7",
                        color: "#fff",
                        alignItems: "center",
                    }}
                >
                    <span>Profile</span>
                    <span>Posts</span>
                    <span>Gallery</span>
                    <span>ToDo</span>
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-between">
                        <h4>Profile</h4>
                        <div className="d-flex">
                            <img
                                src={location.state.user.profilepicture}
                                alt=""
                                width={30}
                                height={30}
                                style={{ borderRadius: "50%", objectFit: "cover" }}
                                className="mx-2"
                            />
                            <h6>{location.state.user.name}</h6>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-5">
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
                                website:<h6>{location.state.user.website}</h6>
                            </span>
                            <hr />
                            <h5>Company</h5>
                            <span className="d-block ">
                                Name:<h6>{location.state.user.company.name}</h6>
                            </span>
                            <span className="d-block ">
                                catchPhrase:<h6>{location.state.user.company.catchPhrase}</h6>
                            </span>
                            <span className="d-block ">
                                bs:<h6>{location.state.user.company.bs}</h6>
                            </span>
                        </div>

                        <div className="col-md-7">
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

                            {/* <iframe
                                src={`https://maps.google.com/maps?q=' +${location.state.user.address.geo.lat} + ',' +${location.state.user.address.geo.lng}+'&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                            />
                            <iframe
                                src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=en&z=14&amp;output=embed"
                                width="100%"
                                height="400"
                                frameborder="0"
                                style="border:0"
                                allowfullscreen
                            ></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHomePage;
