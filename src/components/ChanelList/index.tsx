import React from "react";
import { Container, Category, AddCatIcon} from "./styles"
import ChannelButton from '../ChanelButton'

const ServerName: React.FC = () => {
    return(
        <Container>
               <Category>
                        <span>CANAIS DE TEXTO</span>
                    <AddCatIcon />
               </Category>

                <ChannelButton ChannelName="Xenofobia"/>
                <ChannelButton ChannelName="level-feedback"/>
                <ChannelButton ChannelName="Socialismo"/>
                <ChannelButton ChannelName="capitalismo"/>
                <ChannelButton ChannelName="liberdade de expressão"/>
        </Container>
    )
}

export default ServerName;