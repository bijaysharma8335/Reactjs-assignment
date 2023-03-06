import React from "react";
import { BsChatRight } from "react-icons/bs";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
const ChatWidget = ({ users, show, setShow, setShowPopup }) => {
    console.log(show);
    return (
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
                            <span>
                                <img src={user.profilepicture} alt="" />
                                {user.name}
                            </span>
                            <span className="online"></span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
