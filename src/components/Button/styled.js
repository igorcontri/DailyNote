import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${ ({ theme }) => theme.COLORS.ORANGE};
    color: ${ ({ theme }) => theme.COLORS.BACKGROUN_800 };

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    /* button:disabled { opacity: .5; } */
    &:disabled {
        opacity: .5;

    }
`;