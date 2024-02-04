import { NavBar } from "../navBar";
import { TextButton } from "../textButton";
import { Container } from "./style"
import { useNavigate } from "react-router-dom";


export function Header() {
    const navigate = useNavigate()
    
    return (
        <Container>
            <NavBar className="navBar"/>
            <TextButton className="logo" title="Listfy" onClick={() => navigate(-1)}/> 
        </Container>
    );
}