import { SidebarWrapper, Button, Content } from './styles';
import { useState } from "react";
import { Icon_Menu, Icon_Close } from "../Icons";
import { Link } from "react-router-dom"
import { useBasket } from "../../hooks/basketManager";




export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


    return (
      <>
        <Button onClick={toggleSidebar}>{isOpen ? <><Icon_Close color={"#ddff45"}/> <span>Menu</span></>: <Icon_Menu/>}</Button>
        <SidebarWrapper $isOpen={isOpen}>

          <Content>
          <ul>
            <li><Link to="/"><span>Home</span></Link></li>
          </ul>
          </Content>
        </SidebarWrapper>
      </>
    )
};