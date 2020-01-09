import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const DivChat  = styled.div`
    border      : 1px;
    padding     : 5px;
`;
const Welcome  = styled.div`
    border      : 1px;
    padding     : 5px;
`;

const Chat = () => {
    const username = useSelector(state => state.username);

    if (!username) {
        return <Redirect to="/" />
    }
    return (
        <DivChat className = {"card container"}>
            <Welcome > Welcome Guys </Welcome>

            <form className = {"container"}>
                <MessageList />
                <MessageBar />
            </form>
        </DivChat>
    );
};

export default Chat;