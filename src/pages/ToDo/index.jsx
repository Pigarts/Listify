
import { Header } from "../../components/header"
import { Container, Content, ItenWroper } from "./style"
import { Pagination } from "../../components/Pagination";
import { ToDoIten } from "../../components/toDoIten"
import { Iten } from "../../components/iten";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBasket } from "../../hooks/basketManager";

export function ToDo() {
    const {screenToDoBasket} = useBasket()
    const [basket, ssetBasket ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        ssetBasket(screenToDoBasket)
    }, [screenToDoBasket]);


    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                {basket &&
                    basket
                        .filter(item => item.type === "toDo") 
                        .map((item, itemIndex) => (
                        <ToDoIten key={itemIndex} title={item.name} complited={item.complited}/>
                        ))
                }
                <Iten $isNew onClick={() => navigate("/neewiten/toDo")}/>

                </ItenWroper>
            </Content>
        </Container>
    )
}