import styled from "styled-components";
import { Hash } from "phosphor-react"

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;
    z-index: 2;

    padding: 0 1.0625rem;

    background-color: var(--primary);
    box-shadow: 0 .05rem 0.25rem rgba(0, 0, 0, 0.5);
`
export const HashtagIcon = styled(Hash)`
    height: 1.5rem;
    width: 1.5rem;

    color: var(--symbol);
    opacity: .3;
`
export const Title = styled.div`
    margin-left: 0.5625rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--white);
`
export const Separator = styled.div`
    height: 1.5rem;
    width: 0.0625rem;
    background-color: var(--white);
    opacity: .2;
    margin: 0 0.8125rem;
`
export const Description = styled.span`
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--gray);
`
