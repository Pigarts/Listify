
import { Header } from "../../components/header"

import { Container, Content, ItenWroper } from "./style"

import { Pagination } from "../../components/Pagination";
import { Iten } from "../../components/iten";
import { useEffect, useState } from "react";
import { useBasket } from "../../hooks/basketManager";
import { useNavigate } from "react-router-dom";
import { GoalIten } from "../../components/GoalIten";
import { Acordeon } from "../../components/acordeon";

export function Goal() {
    const { screenGoalBasket  } = useBasket()
    const [itengroups, setItengroups ] = useState([])
    
    const navigate = useNavigate();
    
    useEffect(() => {
        const groups = Array.from(new Set(screenGoalBasket.map(iten => iten.group)));
        setItengroups(groups)
    }, [screenGoalBasket]);
    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                    {screenGoalBasket &&
                    screenGoalBasket
                    .filter(item => item.type === "goalList" && item.group === "default")
                    .map((item, itemIndex) => (
                        <GoalIten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                        ))
                    }

                    {
                        itengroups &&
                        itengroups.filter(group => group !== "default")
                        .map((group, groupIndex) => (
                            <Acordeon key={groupIndex} title={group}>
                    
                        {screenGoalBasket &&
                            screenGoalBasket
                            .filter(item => item.type === "goalList" && item.group === group)
                            .map((item, itemIndex) => (
                                <GoalIten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                            ))
                    }
                </Acordeon>
                ))

                }
                </ItenWroper>
                    <Iten $isNew onClick={() => navigate("/neewiten/goalList")}/>
            </Content>
        </Container>
    )
}