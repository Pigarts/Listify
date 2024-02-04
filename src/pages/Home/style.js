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

export const ItenWroper = styled.div`
margin-top: 15px;
display: flex;
flex-direction: column;
gap: 15px;
overflow-y: auto;

`

export const Pagination = styled.nav`
margin-top: 15px;
width: 100%;
display: flex;
gap: 35px;
margin-bottom: 35px;

ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
a{
    text-decoration: none;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    text-align: center;
    color: ${({theme}) => theme.COLORS.W1};
    filter: brightness(.6);
}

a.selected, a:hover{
 filter: brightness(1);
}
`