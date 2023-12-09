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
    border: 2px solid red;
`;

export const Menu = styled.div`
    grid-area: menu;
    border: 2px solid green;
`;

export const Search = styled.div`
    grid-area: search;
    border: 2px solid yellow;
`;

export const Content = styled.div`
    grid-area: content;
    border: 2px solid blue;
`;

export const NewNote = styled.div`
    grid-area: newnote;
    border: 2px solid violet;
`;
