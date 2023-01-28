import React from "react";
import { Container, Role, User, Avatar } from "./styles"

interface UserProps {
    isBot ? : boolean;
    nickname: string;
}

const UserRow: React.FC <UserProps> = ( {isBot, nickname} ) => {
    return (
        <User>
            <Avatar className={isBot ?  'BOT' : ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
               <Role>Disponível - 1</Role>
               <UserRow nickname="Erick McLovin"/>

               <Role>Offline - 5</Role>
               <UserRow nickname="STF" isBot/>
               <UserRow nickname="Yuchose"/>
               <UserRow nickname="Vit12"/>
               <UserRow nickname="Monark"/>
               <UserRow nickname="Paulo Kogos"/>
               <UserRow nickname="Ian Neves"/>
               <UserRow nickname="zPad"/>
               <UserRow nickname="Pesquito"/>
               <UserRow nickname="Determinati0n"/>
               <UserRow nickname="Enzuu"/>
               <UserRow nickname="Hughast"/>
        </Container>
    )
}

export default UserList;