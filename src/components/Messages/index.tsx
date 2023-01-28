import React from "react";
import { Container, Avatar, Message, Header, Body } from "./styles"

export { Mention } from './styles';

export interface Props{
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention ? : boolean;
    isBot ? : boolean;
}


export const Messages: React.FC <Props> = ( {
    author,
    content,
    date,
    hasMention,
    isBot
} ) => {

    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'BOT': ''}/>
            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>BOT</span>}

                    <time>( {date} )</time>
                </Header>
                <Body>
                    {content}
                </Body>
            </Message>
        </Container>
    )
}

