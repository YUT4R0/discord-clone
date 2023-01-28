import styled from "styled-components";

export const Container = styled.div`
    grid-area: UL;

    display: flex;
    flex-direction: column;

    padding: 0.1875rem 1.4375rem 0 1rem;
    max-height: calc(100vh - 2.875rem);

    background-color: var(--secondary);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0.25rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: .25rem;
        
    }
    
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
`
export const Role = styled.span`
    color: var(--gray);
    text-transform: uppercase;
    margin-top: 1.25rem;
    font-size: 0.75rem;
    font-weight: 500;
`
export const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    margin-top: 0.3125rem;
    padding: 0.3125rem;
    border-radius: .25rem; 
    background: transparent;
    transition: background .2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    > strong {
        color: var(--white);
        font-weight: 500;
        opacity: .6;
        font-size: .9rem;
        margin-left: 0.8125rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span {
        text-transform: uppercase;
        color: var(--white);
        margin-left: 0.5625rem;
        background-color: var(--discord);
        border-radius: .25rem;
        padding: 0.125rem 0.3125rem;
        font-weight: bold;
        font-size: .5rem
    }

`
export const Avatar = styled.div`
    flex-shrink: 0;
    border-radius: 50%;

    height: 2rem;
    width: 2rem;

    background-color: var(--primary);

    &.BOT{
        background-color: var(--mention-detail);
    }
`