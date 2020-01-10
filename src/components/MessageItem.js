import React from 'react';
import Emoji from "react-emoji-render";
import{ FormattedMessage } from'react-intl';

const MessageItem = (props) => {
console.log(props.message)
    const date = (date) => {
        if (date instanceof Date  ) {
            return date.toDateString();
        }else{
            return date;
        }
    };

    return (
        <div>
            <span>
                <small>{date(props.message.sentAt)} </small>
                <small> {`@ ${props.message.username}`} </small>
                <Emoji text = {`¬ ${props.message.message}`} />

            </span>
        </div>
    );
};

export default MessageItem;