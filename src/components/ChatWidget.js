import React, { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
const ChatWidget = ({ users, show, setShow, setShowPopup }) => {
    console.log(show);
    const [chatUser, setChatUser] = useState("");
    const [chatUserBox, setChatUserBox] = useState(false);
    return (
        <>
            {chatUserBox && (
                <div
                    className="chat-widget-container-user chat-show"
                    onClick={() => {
                        setShow(false);
                        setShowPopup(false);
                        setChatUserBox(false);
                    }}
                >
                    <div className="chat-widget-header-user">
                        <div className="mt-1">
                            <img src={chatUser.profilepicture} alt="" />
                            {chatUser.name}
                        </div>
                        <div>
                            <GoChevronDown className="me-1 mt-2" />
                            <RxCross2 className="ms-1 mt-2" onClick={() => setChatUserBox(false)} />
                        </div>
                    </div>

                    <div className="chat-widget-body-user cursor-pointer">
                        <p className="bg-light my-1 rounded">lorem10</p>
                        <p className="bg-light my-1 rounded">lorem10</p>
                        <p className="bg-light my-1 rounded">lorem10</p>
                        <p className="bg-light my-1 rounded">lorem10</p>
                        <p className="bg-light my-1 rounded">lorem10</p>
                        <p className="bg-light my-1 rounded">lorem10</p>
                    </div>
                    <div className="chat-widget-message-user">
                        <input type="text" />
                        <FaTelegramPlane className="chat-widget-message-user-icon" />
                    </div>
                </div>
            )}
            <div className={show ? "chat-widget-container chat-show" : " chat-widget-container"}>
                <div
                    className="chat-widget-header"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShow(!show);
                        setShowPopup(false);
                    }}
                >
                    <div className="mt-1">
                        <BsChatRight className="mx-2 fw-bold" />
                        Chats
                    </div>
                    {show ? (
                        <GoChevronDown className="me-2 mt-2" />
                    ) : (
                        <GoChevronUp className="me-2 mt-2" />
                    )}
                </div>
                {show && (
                    <div className="chat-widget-body">
                        {users.map((user, index) => (
                            <div className="d-flex justify-content-between align-items-center cursor-pointer">
                                <span
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setChatUser(user);
                                        setShow(true);
                                        setChatUserBox(!chatUserBox);
                                    }}
                                >
                                    <img src={user.profilepicture} alt="" />
                                    {user.name}
                                </span>
                                <span className="online"></span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ChatWidget;
