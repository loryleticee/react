import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {IntlProvider, FormattedMessage} from 'react-intl';
import {translate} from "../translations/index";

const locale = navigator.language;

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
        <IntlProvider locale={locale} messages= {translate(locale)}>
        <DivChat className = {"card container"}>
            <Welcome >
                <FormattedMessage id="app.welcome" />
            </Welcome>

            <form className = {"container"}>
                <MessageList />
                <MessageBar />
            </form>
        </DivChat>
        </IntlProvider>
    );
};

export default Chat;