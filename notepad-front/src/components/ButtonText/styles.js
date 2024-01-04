import styled from "styled-components";

export const Container = styled.button`
    font-size: 1rem;
    padding: 3px;
    color: ${({ theme, isActive }) =>
        isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    background: none;
    border: none;

    &:disabled {
        opacity: 0.5;
    }
`;
