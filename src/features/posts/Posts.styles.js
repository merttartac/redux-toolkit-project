import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 5%;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;

article {
    padding: 3%;
    border: 1px solid white;
    border-radius: 20px;
    margin: 5px 0;

    h3 {
        margin: 0;
        padding: 2px 5px;
        color: var(--white);
        background: var(--medGreyTwo);
    }

    p {
        color: var(--white);
    }
}

h2 {
    margin: 0;
    padding: 2px 10px;
    color: var(--white);
}
`;