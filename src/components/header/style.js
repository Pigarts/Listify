import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    padding: 25px;
    align-items: center;

    button.logo  {
        margin-left: -24px;
        z-index: 0;
        flex: 1;
        color: ${({ theme }) => theme.COLORS.W1};
        font-family: 'roboto', sans-serif;
        font-size: 34px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        cursor: pointer;
    }

    button.navBar {
        position: absolute;
        left: 15px;
    }
`;
