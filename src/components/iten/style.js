import styled from "styled-components"

export const Container = styled.div`
height: 45px;
width: 100%;
border-radius: 20px;
background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.C1};
border: ${({ $isNew}) => $isNew ? "2px dashed #ddff45 ": "none"};;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
    button.title{
        color: ${({theme}) => theme.COLORS.B1};
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 100%;
        width: 100%;
        text-align: center;

    }

    button.add{
        color: ${({theme}) => theme.COLORS.C1};
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 100%;
        width: 100%;
        text-align: center;
    }
`