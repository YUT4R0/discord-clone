import styled from "styled-components";
import { At } from "phosphor-react"

export const Container = styled.div`
    grid-area: CM;

    background-color: var(--primary);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MessagesArea = styled.div`
    padding: 1.25rem 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 2.875rem - 4.25rem);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: .25rem;
        
    }
    
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
`
export const ChatWrapper = styled.div`
    width: 100%;
    padding: 0 1rem;
`

export const ChatIcon = styled(At)`
    height: 1.75rem;
    width: 1.75rem;
    color: var(--gray);
    cursor: pointer;
`

export const ChatInput = styled.input`
    width: 100%;
    height: 2.75rem;
    padding: 0 0.625rem 0 3.5625rem;
    border-radius: 0.4375rem;
    color: var(--white);
    background-color: var(--chat-input);
    position: relative;

    ::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: 0.875rem;
        transition: 180ms ease-in-out;
    }

`