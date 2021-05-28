import React from "react";

import { Container, HashtagIcon, Title, Separator, Description, Icons, NotificationIcon, ThumbtackIcon, PeopleIcon } from "./styles";

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
                <ThumbtackIcon> <FontAwesomeIcon icon={faThumbtack} /> </ThumbtackIcon>
                <PeopleIcon />
            </Icons>
        </Container>
    );
};

export default ChannelInfo;