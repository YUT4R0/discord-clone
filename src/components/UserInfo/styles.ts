import styled from "styled-components";
import { GearSix, Microphone, Headphones }  from "phosphor-react"

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.625rem;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, .2) 0 1px 0 0;
    cursor: pointer;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
`
export const Avatar = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: var(--gray);
    position: relative;

    &::after {
    content: '';
    z-index: 1;
    background-color: red;
    bottom: .00001rem;
    right: .00001rem;
    border-radius: 50%;
    height: 0.625rem;
    width: 0.625rem;
    position: absolute;
    }
`
export const UserData = styled.div`
    margin-left: .5rem;
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 0.8125rem;
        color: var(--white);
        display: block;
    }

    > strong:hover{
        text-decoration: underline;
    }

    > span {
        color: var(--gray);
        font-size: 0.8125rem;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    color: var(--symbol);

    > svg:not(:first-child) {
        margin-left: 0.4375rem;
    }
`
export const MicIcon = styled(Microphone)`
    color: var(--white);
    opacity: .5;
    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`
export const HeadphoneIcon = styled(Headphones)`
    color: var(--white);
    opacity: .5;
    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`
export const SettingsIcon = styled(GearSix)`
    color: var(--white);
    opacity: .5;
    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`

export const UserId = (Math.random() * 10000).toFixed(0)