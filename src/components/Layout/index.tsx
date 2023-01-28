import React from "react";
import { Grid } from "./styles"
import Serverlist from "../ServerList";
import ServerName from "../ServerName";
import ChanelInfo from "../ChanelInfo";
import ChanelList from "../ChanelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import { ChanelMessage } from "../ChanelMessage";
import { Messages } from "../Messages";

const layout: React.FC = () => {
    return(
        <Grid>
            <Serverlist />         
            <ServerName />
            <ChanelInfo /> 
            <ChanelList />
            <UserInfo />
            <ChanelMessage />
            <UserList />
        </Grid>
    )
}

export default layout;