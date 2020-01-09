import axios from 'axios';
import {ws} from "../services/websocket";

const URL = "https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages";

let nextIdMessage = 0;

export const ADD_MESSAGE            = "ADD_MESSAGE";
export const LOAD_MESSAGE_PENDING   = "LOAD_MESSAGE_PENDING";
export const LOAD_MESSAGE_SUCCESS   = "LOAD_MESSAGE_SUCCESS";
export const LOAD_MESSAGE_ERROR     = "LOAD_MESSAGE_ERROR";

export const LOG_USER               = "LOG_USER";

export const logUser = (username) => ({
    type    : LOG_USER,
    username,
});

export const addMessage = (message) => {
    const action = {
        type        : ADD_MESSAGE,
        message     : message.message,
        username    : message.username,
        sentAt      : new Date(),
    };
    ws.send(JSON.stringify(action));

    return action;
};

export const loadMessagePending = async(dispatch) => {
    /*
    return () => {
        response = await axios.get(URL).then(
            values => dispatch(addMessage(response,))
        );
    }*/

};

/*
export const loadMessageSucces = (message, username) => ({
    type    : LOAD_MESSAGE_SUCCESS,
    key     : nextIdMessage++,
    username,
    message,
});

export const loadMessageError = (message, username) => ({
    type    : LOAD_MESSAGE_ERROR,
    key     : nextIdMessage++,
    username,
    message,
});
 */