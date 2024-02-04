import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { Iten } from "../../components/iten"
import { Container, Content, ItenWroper } from "./style"
import { useBasket } from "../../hooks/basketManager"
import { Link } from "react-router-dom"
import { Pagination } from "../../components/Pagination"
import { useNavigate } from "react-router-dom";

export function Home() {
    const { screenCountBasket} = useBasket()
    const [basket, ssetBasket ] = useState([])
    const navigate = useNavigate();

    
    useEffect(() => {
        ssetBasket( screenCountBasket)
    }, [ screenCountBasket]);
    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <ItenWroper>
                {basket &&
                basket
                    .filter(item => item.type === "countList") // Filtrar itens com base na propriedade "type"
                    .map((item, itemIndex) => (
                    <Iten key={itemIndex} title={item.name} initialValue={item.quantity}/>
                    ))
                }


                <Iten $isNew onClick={() => navigate("/neewiten/countList")}/>

                </ItenWroper>
            </Content>
        </Container>
    )
}