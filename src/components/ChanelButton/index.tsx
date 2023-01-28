import React from "react";
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles"

export interface Props {
    ChannelName: string;
    selected ? : boolean;   
}

const ChanellButton: React.FC <Props> = ( { ChannelName, selected } ) => {
    return(
        <Container className={
            selected
            ? 'acitve'
            : ''
        }>
               <div>
                    <HashtagIcon />
                    <span>{ChannelName}</span>
               </div>
               <div>
                     <InviteIcon />
                    <SettingsIcon />
               </div>
        </Container>
    )
}

export default ChanellButton;