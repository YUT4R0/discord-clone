import React from "react";
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon, UserId} from "./styles"

const UserInfo: React.FC = () => {
    return(
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Pedro Yutaro</strong>
                    <span>
                        <span>#</span>{UserId}
                    </span>
                </UserData>
            </Profile>

        
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo;