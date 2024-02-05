
import { Header } from "../../components/header"
import { Container, Content, ItenWroper } from "./style"
import { Pagination } from "../../components/Pagination";
import { ToDoIten } from "../../components/toDoIten"
import { Iten } from "../../components/iten";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBasket } from "../../hooks/basketManager";
import { Acordeon } from "../../components/acordeon";

export function ToDo() {
    const {screenToDoBasket} = useBasket()
    const [itengroups, setItengroups ] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        const groups = Array.from(new Set(screenToDoBasket.map(iten => iten.group)));
                setItengroups(groups)
    }, [screenToDoBasket]);


    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                    {screenToDoBasket &&
                    screenToDoBasket
                    .filter(item => item.type === "toDo" && item.group === "default")
                    .map((item, itemIndex) => (
                        <ToDoIten key={itemIndex} title={item.name}/>
                        ))
                    }

                    {
                        itengroups &&
                        itengroups.filter(group => group !== "default")
                        .map((group, groupIndex) => (
                            <Acordeon key={groupIndex} title={group}>
                    
                        {screenToDoBasket &&
                            screenToDoBasket
                            .filter(item => item.type === "toDo" && item.group === group)
                            .map((item, itemIndex) => (
                                <ToDoIten key={itemIndex} title={item.name}/>
                            ))
                        }
                        </Acordeon>
                ))

                }
                </ItenWroper>
                <Iten $isNew onClick={() => navigate("/neewiten/toDo")}/>

            </Content>
        </Container>
    )
}