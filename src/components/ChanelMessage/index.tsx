import {Messages, Mention} from "../Messages";
import React, { useRef, useEffect } from "react";
import {
    Container,
    MessagesArea,
    ChatWrapper,
    ChatIcon,
    ChatInput
} from "./styles"

export const ChanelMessage: React.FC = () => {

    const today = new Date().toUTCString();

    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

    var fixScroll = () => {
        let div = messageRef.current

        if(div){
            div.scrollTop = div.scrollHeight
        }
    }

    useEffect(fixScroll, [messageRef])

    return(
        <Container>
            <MessagesArea ref={messageRef}>
                
                {
                    Array.from( Array(15) )
                    .map(n => (
                        <Messages
                        author="Pedro"
                        date={today}
                        content="penis penis penis"
                        />
                    ))

                }

                <Messages
                author="STF"
                isBot
                date={today}
                content="eu sou viado lalalalala"
                />

                <Messages
                author="STF"
                isBot
                date="2015-01-01"
                hasMention
                content={
                    <>
                        <Mention>@Pedro Yutaro</Mention> foi censurado pois ele discorda de mim bla bla b
                    </>
                }
                /> 

            </MessagesArea>
            
            <ChatWrapper>
                <ChatInput type="text" placeholder="skjdsdksdsdkjsd" />
                <ChatIcon />
            </ChatWrapper>

        </Container>
    )
}

