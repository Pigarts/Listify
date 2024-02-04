import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100svw;
height: 100vh;
`

export const Content = styled.div`
padding: 15px 24px ;
flex: 1;

`

export const Form = styled.form`
margin-top: 15px;
display: flex;
gap: 25px;
border-radius: 20px;
flex-direction: column;
overflow-y: auto;
background-color: ${({theme}) => theme.COLORS.B1};
padding: 15px;

div.counterWropper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
span {
    width: 100%;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    color: ${({theme}) => theme.COLORS.W1};
}
}
`