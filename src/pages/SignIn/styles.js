import styled from "styled-components";
import backgroundImg from "../../assets/backgroundImg.jpg";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 1.5rem;
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > p {
        font-size: 0.88;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > button:last-child {
        margin-top: 124px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: calc(0.6);
`;
