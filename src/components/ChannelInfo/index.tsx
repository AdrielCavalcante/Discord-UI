import React from "react";

import { Container, HashtagIcon, Title, Separator, Description, Icons, NotificationIcon, PeopleIcon } from "./styles";

import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />

            <Title>Bate-papo</Title>

            <Separator />

            <Description>Canal aberto para conversas</Description>

            <Icons>
                <NotificationIcon />
                <FontAwesomeIcon icon={faThumbtack} style={{width: '20px', height: '20px', color: 'var(--gray)', marginTop:'3px', cursor: 'pointer', transform: 'rotate(45deg)'}} />
                <PeopleIcon />
            </Icons>
        </Container>
    );
};

export default ChannelInfo;