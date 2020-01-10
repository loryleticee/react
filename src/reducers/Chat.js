import {ADD_MESSAGE, LOAD_MESSAGE_PENDING, LOAD_MESSAGE_ERROR, LOAD_MESSAGE_SUCCESS} from "../actions"

const INIT_STATE = [
    {

            username: 'toto',
            message: 'hello word',
            sentAt  : new Date()

    }

]
;

export const messageList = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newState = {
                username: action.username,
                message : action.message,
                sentAt  : action.sentAt,
            };
            const r = state.concat(newState);

            console.log(r)
            return r;

        case LOAD_MESSAGE_PENDING:
            return state;

        case LOAD_MESSAGE_SUCCESS:
            console.log("dddd")
            const f = (msg, index) =>(
                state.push(msg)
            );

            action.messages.forEach(f);

            return  state;

        case LOAD_MESSAGE_ERROR:
            return [...state.messages, {
                message : action.error,
                username: "system",
                sentAt  : new Date(),
            }];

        default :
            return state;
    }
};