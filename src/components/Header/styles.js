import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    /* background-color: lightblue; */
    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 1.5rem;

        span {
            font-size: 0.875rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.125rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    /* icon */
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.5rem;
    }
`;
