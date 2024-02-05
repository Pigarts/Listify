import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { Iten } from "../../components/iten"
import { Container, Content, ItenWroper } from "./style"
import { useBasket } from "../../hooks/basketManager"
import { Link } from "react-router-dom"
import { Pagination } from "../../components/Pagination"
import { useNavigate } from "react-router-dom";
import { Acordeon } from "../../components/acordeon"

export function Home() {
    const { screenCountBasket} = useBasket()
    const [itengroups, setItengroups ] = useState([])

    const navigate = useNavigate();
    
    useEffect(() => {

        const groups = Array.from(new Set(screenCountBasket.map(iten => iten.group)));
        setItengroups(groups)
        console.log(screenCountBasket)
    }, [ screenCountBasket]);
    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                    {screenCountBasket &&
                    screenCountBasket
                    .filter(item => item.type === "countList" && item.group === "default")
                    .map((item, itemIndex) => (
                        <Iten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                        ))
                    }

                    {
                        itengroups &&
                        itengroups.filter(group => group !== "default")
                        .map((group, groupIndex) => (
                            <Acordeon key={groupIndex} title={group}>
                    
                        {screenCountBasket &&
                            screenCountBasket
                            .filter(item => item.type === "countList" && item.group === group)
                            .map((item, itemIndex) => (
                                <Iten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                            ))
                    }
                </Acordeon>
                ))

                }
                </ItenWroper>
                <Iten $isNew onClick={() => navigate("/neewiten/countList")}/>
            </Content>
        </Container>
    )
}