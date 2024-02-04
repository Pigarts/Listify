import { useEffect, useState } from "react";
import { Container } from "./style";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom"


export function Pagination() {
    const [local, setLocal] = useState()

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        setLocal(pathname)
    
    }, [pathname]);
    return (
        <Container>
            <ul>
                <li><Link to={"/"} className={local == "/" || local == "/neewiten/countList" ? "selected" : ""}>Lista</Link></li>
                <li><Link to={"/goal"} className={local == "/goal"|| local == "/neewiten/goalList" ? "selected" : ""}>Metas</Link></li>
                <li><Link to={"/todo"} className={local == "/todo" || local == "/neewiten/toDo" ? "selected" : ""}>To do</Link></li>
            </ul>
        </Container>
    )
}