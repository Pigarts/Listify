import  styled  from "styled-components";

export const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 8px;


width: 100%;
padding:12px 32px; ;
border: 0;
border-radius: 5px;

font-family: Poppins;
font-size: 14px;
font-weight: 500;
line-height: 24px;;

background-color: ${({theme}) => theme.COLORS.C1};
color: ${({theme}) => theme.COLORS.B1};
a {
color: ${({theme}) => theme.COLORS.B1};
display: flex;
gap: 8px;
align-items: center;

}

&:disabled {
    background-color: ${({theme}) => theme.COLORS.Tomato_400};
}
` 