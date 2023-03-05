import React, { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
const ChatWidget = () => {
    const [show, setShow] = useState(false);
    return (
        
        <div className="chat-widget-container">
            <div className="mt-1">
                <BsChatRight className="mx-2 fw-bold" />
                Chats
            </div>
            {show ? <GoChevronDown className="me-2 mt-2" /> : <GoChevronUp className="me-2 mt-2" />}
            
        </div>
    );
};

export default ChatWidget;
