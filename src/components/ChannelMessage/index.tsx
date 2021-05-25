import React from "react";

import { Container, Avatar, Message, Header, Content } from "./styles";
export { Mention } from "./styles"

export interface Props{
    author: string;
    date: string;
    content: string | React.ReactElement; //ou
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({author, date, content, hasMention, isBot}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content> {/*@Adriel, esse clone do discord poderia ter light-mode*/}
            </Message>
        </Container>
    );
};

export default ChannelMessage;