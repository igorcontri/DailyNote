import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "brand header"
        "menu search"
        "menu content"
        "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.div`
    grid-area: menu;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > ul {
        margin-top: 20px;
        list-style: none;

        line-height: 30px;
        font-size: 0.8rem;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0; /* ^ <> v  */
`;

export const Content = styled.div`
    grid-area: content;
`;

export const NewNote = styled.button`
    grid-area: newnote;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;

    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    /* Fi Plus */
    svg {
        margin-right: 8px;
    }
`;
