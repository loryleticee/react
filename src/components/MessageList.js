import React, {useEffect} from 'react';
import MessageItem from "./MessageItem";
import ShowMessage from "../containers/ShowMessage";
import {useSelector} from "react-redux";


const MessageList = () => {
    const messages = useSelector(state => state.messageList);

    return (
        <ShowMessage
            message = { messages.map( (message, index) => <MessageItem key= {index} message= {message} /> ) }
        />
    );
};

export default MessageList;