import styled from "styled-components"

export const Container = styled.button`
height: 25px;
background: none;
border: none;
padding: 0;

display: flex;
align-items: center;
justify-content: center;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;;

color: ${({theme}) => theme.COLORS.W1};
`