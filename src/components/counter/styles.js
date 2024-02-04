import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
span {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.COLORS.W1};
}
`

export const Content = styled.div`

height: auto;   
border: none;
background: none;

display: flex;
align-items: center;
justify-content: center;
gap: 10px;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;
color: ${({theme}) => theme.COLORS.W1};; /* Cor da borda quando o select estiver em foco */


input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

button.buttton > svg {
    outline: 2px solid transparent;
    transition: outline-color 0.2s ease;
&:focus-within {
    outline-color: ${({theme}) => theme.COLORS.C1};; /* Cor da borda quando o select estiver em foco */
  }
}

`

export const Number = styled.input`
width: min-content;
background: none;
text-align: center;
color: ${({theme}) => theme.COLORS.W1};
outline: 2px solid transparent;
transition: border-color 0.2s ease;
&:focus-within {
    outline-color: ${({theme}) => theme.COLORS.C1};; /* Cor da borda quando o select estiver em foco */
  }

width: 40px;
height: 30px;
border: none;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 100%;
`