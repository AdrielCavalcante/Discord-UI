import React, { useRef, useEffect} from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div)
            div.scrollTop = div.scrollHeight;
    }, [messagesRef]);
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Pinguim"
                        date="25/05/2021"
                        content= "Use Linux, abandone o Windows :<"
                    />
                ))}

                <ChannelMessage
                    author="Buzz"
                    date="25/05/2021"
                    content={
                        <>
                            <Mention>@Adriel</Mention>, esse clone do discord poderia ter light-mode ; )
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em # Bate-papo"/>
                <InputIcon />
            </InputWrapper>

        </Container>
    );
};

export default ChannelData;