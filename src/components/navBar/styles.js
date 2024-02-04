import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 100svw;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.B1};
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100svw')};
  transition: left 0.3s ease;
  z-index: 5;

  scroll-behavior: none;
`;

export const Button = styled.button`
  background: none;
  color: white;
  border: none;
  z-index: 6;

  display: flex;
  align-items: center;
  gap: 16px;

  span{
      color: ${({theme}) => theme.COLORS.W1};
      font-family: Roboto;
      font-size: 21px;
      font-weight: 400;
  }
`;

export const Content = styled.div`
ul {
  padding: 80px 40px;
  list-style: none;
  }
  li {
    width: 100%;
    border-bottom: 1px ${({theme}) => theme.COLORS.W1} solid;
    margin-bottom: 15px;
    transition: border-color 0.2s ease;
  }
  li:hover {
    border-color: ${({theme}) => theme.COLORS.C1};
  }
  span{
    font-family: Poppins;
     font-size: 18px;
     font-weight: 300;
     line-height: 33.6px;
     color: ${({theme}) => theme.COLORS.W1};

 }
`