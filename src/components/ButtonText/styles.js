import styled from "styled-components";

export const Container = styled.button`
    font-size: 1rem;
    padding: 3px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    background: none;
    border: none;

    
    &:disabled {
        opacity: .5;

    }
`;