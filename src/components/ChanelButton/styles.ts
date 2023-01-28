import styled from "styled-components";
import { Hash }  from "phosphor-react"
import { UserPlus }  from "phosphor-react"
import { GearSix }  from "phosphor-react"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 0.3125rem 0.6rem;
    border-radius: 0.3125rem;

    background-color: transparent;
    transition: background-color .2s ;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        color: var(--senary);
        margin-left: 0.3125rem;
        transition: color .2s;
        font-size: .8rem;
    }

    &:hover, &.active {
        background-color: var(--quinary);
        > div span {
            color: var(--white);
        }
    }

    > div:last-child svg {
        display: none;
    }

    &:hover, &.active {
        > div svg {
            display: block;
        }
    }
`
export const HashtagIcon = styled(Hash)`
    color: var(--symbol);
    height: 1.25rem;
    width: 1.25rem;
    cursor: pointer;
`
export const InviteIcon = styled(UserPlus)`
    color: var(--symbol);
    height: .9rem;
    width: .9rem;
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white)
    }
`
export const SettingsIcon = styled(GearSix)`
    color: var(--symbol);
    height: .9rem;
    width: .9rem;
    cursor: pointer;
    transition: color .2s;
    margin-left: 0.25rem;

    &:hover {
        color: var(--white)
    }
`