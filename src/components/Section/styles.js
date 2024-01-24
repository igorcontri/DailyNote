import styled from 'styled-components';

export const Container = styled.section`
    margin: 56px 0 0;

    > h2 {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUN_700};

        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.25rem;
        font-weight: 400;
    }
`;