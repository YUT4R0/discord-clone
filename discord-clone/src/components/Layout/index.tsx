import React from "react";
import Grid from "./styles"
import Serverlist from "../ServerList";

const layout: React.FC = () => {
    return(
        <Grid>
            <Serverlist></Serverlist>              
        </Grid>
    )
}

export default layout;