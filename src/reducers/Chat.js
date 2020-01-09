import {ADD_MESSAGE, LOAD_MESSAGE_PENDING} from "../actions"

const INIT_STATE = [
    {
        message : '¬ Hello world',
        username: '@ Toto',
        sentAt  : new Date()
    }
];

export const messageList = (state = INIT_STATE, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            return [...state, {
                username: action.username,
                message : action.message,
                sentAt  : action.sentAt,
            }];

        case LOAD_MESSAGE_PENDING :
            return state;
        default :
            return state;
    }
};