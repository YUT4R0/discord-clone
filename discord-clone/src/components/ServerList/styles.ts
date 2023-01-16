import styled from "styled-components";

const Container = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--tertiary);
    padding: 0.6875rem 0%;
    max-height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Separator = styled.div`
    width: 2rem;
    border: 0.8rem solid var(--quaternary);
    margin-bottom: 0.5rem;
`;

export default Container; Separator;