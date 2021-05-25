import React from "react";

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>
                <ChannelButton channelName="Bate-papo" selected />
                <ChannelButton channelName="Trabalho" />
                <ChannelButton channelName="Memes" />
                <ChannelButton channelName="Comandos" />
                <ChannelButton channelName="Dúvidas" />
        </Container>
    );
};

export default ChannelList;