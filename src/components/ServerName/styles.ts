import styled from "styled-components";
import { CaretDown }  from "phosphor-react"

export const Container = styled.div`
    grid-area: SN;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    height: 2.875rem;
    width: 15rem;
    padding: 0 0.6875rem 0 1rem;

    background-color: var(--secondary);
    box-shadow: 0 .05rem 0.25rem rgba(0, 0, 0, 0.5);
`
export const Title = styled.h1`
    font-size: 1rem;
    color: var(--white);
    font-weight: bold;
`
export const ExpandIcon = styled(CaretDown)`
    width: 1rem;
    height: 1rem;
    font-weight: bolder;
    color: var(--white);
    cursor: pointer;
`