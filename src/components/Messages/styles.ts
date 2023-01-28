import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CM;

    display: flex;
    align-items: center;

    padding: .25rem 1rem;
    margin-right: .25rem;
    background-color: transparent;

    &.mention {
        background-color: var(--mention-message);
        border-left: 2px solid var(--mention-detail);
        padding-left: 0.875rem;
    }

    & + div {
        margin-top: 0.8125rem;
    }
`;

export const Avatar = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: var(--secondary);

    &.BOT {
        background-color: var(--mention-detail);
    }
`
export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 2.5rem;
    margin-left: 1.0625rem;
`
export const Header = styled.div`
    display: flex;
    align-items: center;

    > strong {
        color: var(--white);
    }

    > span {
        text-transform: uppercase;
        color: var(--white);
        margin-left: 0.375rem;
        background-color: var(--discord);
        border-radius: .25rem;
        padding: 0.125rem 0.3125rem;
        font-weight: bold;
        font-size: .5rem
    }

    > time {
        margin-left: .75em;
        color: var(--gray);
        font-size: 0.8125rem;
        opacity: .75;
    }
`
export const Body = styled.div`
    text-align: left;
    color: var(--white);
    font-size: .85rem;
`
export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
