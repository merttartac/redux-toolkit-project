import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    width: var(--maxWidth);
    margin: 0 auto;
    padding: 15px 20px;
    height: 50px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    a {
        font-size: var(--fontMed);
        color: var(--white);
        margin: 0;
        padding: 5px 5px;
        text-decoration: none;
        
        @media screen and (max-width: 768px) {
            font-size: var(--fontSmall);
        }

        :hover, :focus, :active, :visited {
            color: var(--white);
            text-decoration: none;
        }

    }

`;