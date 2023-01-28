import styled from "styled-components";
import { Props } from "./index";

export const Button = styled.button <Props> `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    cursor: pointer;
    position: relative;

    background-color: ${
    props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    > img{
        width: 1.5rem;
        height: 1.5rem;
    }

    &::before {
        height: 0.5625rem;
        width: 0.5625rem;
        position: absolute;
        left: -1.0625rem;
        top: calc(50% - 0.28125rem);
        background-color: var(--white);
        border-radius: 50%;
        content: '';
        display: ${
            props => 
            props.hasNotifications
            ? 'inline'
            : 'none'
        };
    }

    &::after{
        background-color: var(--notification);
        color: var(--white);
        border: 0.25rem solid var(--quaternary);
        border-radius: 0.75rem;

        height: 1rem;
        width: auto;
        padding: 0 .25rem;

        bottom: -.25rem;
        right: -.25rem;

        text-align: center;
        font-size: 0.8125rem;
        font-weight: bold;

        position: absolute;
        content: '${props => props.mentions && props.mentions}';
        display: ${
        props => (props.mentions && props.mentions > 0)
        ? 'inline'
        : 'none'
        };
    }

    transition: border-radius .2s, background-color .2s;

    &.active, &:hover{
        border-radius: 1rem;
        background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }
`

