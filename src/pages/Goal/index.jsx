
import { Header } from "../../components/header"

import { Container, Content, ItenWroper } from "./style"

import { Pagination } from "../../components/Pagination";
import { Iten } from "../../components/iten";
import { useEffect, useState } from "react";
import { useBasket } from "../../hooks/basketManager";
import { useNavigate } from "react-router-dom";
import { GoalIten } from "../../components/GoalIten";

export function Goal() {
    const { screenGoalBasket  } = useBasket()
    const [basket, ssetBasket ] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        ssetBasket(screenGoalBasket)
    }, [screenGoalBasket]);
    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                {basket &&
                basket
                    .filter(item => item.type === "goalList") // Filtrar itens com base na propriedade "type"
                    .map((item, itemIndex) => (
                    <GoalIten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                    ))
                }
                    <Iten $isNew onClick={() => navigate("/neewiten/goalList")}/>

                </ItenWroper>
            </Content>
        </Container>
    )
}