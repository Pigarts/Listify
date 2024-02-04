import { styled }  from "styled-components";

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
span {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    text-align: center;
    color: ${({theme}) => theme.COLORS.W1};
}
`

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color:  ${({theme}) => theme.COLORS.B2};
border-radius: 16px;

>svg {
    margin-left: 16px;
}

>input {
    height: 56px;
    width: 100%;
    padding: 14px 16px;

    color: ${({theme}) => theme.COLORS.W1};
    background: transparent;
    outline: none;
    border: none;
    border-radius: 16px;
    &:placeholder {
        color: ${({theme}) => theme.COLORS.G1};
    }
    
    border: 2px solid transparent;
    transition: border-color 0.2s ease;
    &:focus-within {
    border-color: ${({theme}) => theme.COLORS.C1};; /* Cor da borda quando o select estiver em foco */
  }
}
`