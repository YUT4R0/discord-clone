import styled from "styled-components";

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CM - Channel Message
//UL - User List
//UI - User Info

const Grid = styled.div`
    display: grid;
    grid-template-columns: 4.4375rem 15rem auto 15rem;
    grid-template-rows: 2.875rem auto 3.25rem;
    grid-template-areas: 
    "SL SN CI CI"
    "Sl CL CM UL"
    "SL UI CM UL"
    ;
    height: 100vh;
`;

export default Grid;