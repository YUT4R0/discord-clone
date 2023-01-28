import React from "react";
import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";


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