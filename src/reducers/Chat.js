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
            let newState = {
                username: action.username,
                message : action.message,
                sentAt  : action.sentAt,
            };

            return [...state, newState];

        case LOAD_MESSAGE_PENDING :
            return state;
        default :
            return state;
    }
};