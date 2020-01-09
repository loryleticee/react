import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import PropTypes from 'prop-types';
import {addMessage} from '../actions';
//import {loadMessagePending} from '../actions';


const MessageBar = (props) => {
    const [messageContent, setMessageContent] = useState('');

    //console.log(loadMessagePending());
    const username = useSelector(state => state.username);
    const dispatch = useDispatch();

    const catchSubmit = (e) => {
        e.preventDefault();

        if (messageContent) {
            let message = {
                type        : "ADD_MESSAGE",
                message     : messageContent,
                username    : username,
                sentAt      : new Date()
            };

           dispatch(addMessage(message))
        }

        setMessageContent("");
   };
    return (
        <div >
            <input
                type        = "text"
                className   = "{}"
                name        = "msg_value"
                value       = {messageContent}
                onChange    = { (e) => setMessageContent (e.target.value) }
            />
            <input
                type        = "submit"
                className   = "{}"
                name        = "submit_button"
                onClick     = {catchSubmit}
            />
        </div>
    );
};

/*MessageBar.propTypes = {
    catchSubmit: PropTypes.func.isRequired,
};*/

export default MessageBar;