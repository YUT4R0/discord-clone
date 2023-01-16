import React from "react";
import { Container, ServerButton, Separator } from "./styles";

const Serverlist: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={1}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={1}/>
        </Container>
    )
}

export default Serverlist