import styled from "styled-components";
import { Plus }  from "phosphor-react"

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 1.5rem 0.59375rem 0 .5rem;
    background-color: var(--secondary);

`
export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.375rem;

    > span {
        text-transform: uppercase;
        font-size: 0.7rem;
        margin-left: .7rem;
        font-weight: bold;
        color: var(--gray);
    }
`
export const AddCatIcon = styled(Plus)`
    color: var(--symbol);
    height: 1rem;
    width: 1rem;
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
    }

`