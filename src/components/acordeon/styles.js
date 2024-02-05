import  styled  from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;


width: 100%;
border: 0;
border-radius: 5px;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;;

div.accordion-toggle {
    padding: 0 15px;
    height: 0px;
    font-size: 18px;
    opacity: 0;
    display: none;
    color: #333;
    width: 100%;

}

div.animated{
    opacity: 1;
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: scroll;


}
` 

export const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;



width: 100%;
padding:  15px;
border: 0;
border-radius: 20px;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;;

background-color: ${({theme}) => theme.COLORS.B2};
color: ${({theme}) => theme.COLORS.W1};
`
