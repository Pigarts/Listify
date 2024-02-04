import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { Container, Content, Form } from "./style"
import { Counter } from "../../components/counter";
import { useBasket } from "../../hooks/basketManager";
import { Button } from "../../components/button";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination";
import { Select } from "../../components/select";

export function NewIten() {
    
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(1);

    const [itenTilte, setItenTilte] = useState("");
    
    const params = useParams()
    
    const {addToBasket} = useBasket()
    const navigate = useNavigate()

    const handleStartCounterValue = (newStartValue) => {
        setStartValue(newStartValue)
    };

    const handleEndCounterValue = (newEndValue) => {
        setEndValue(newEndValue)
    };


    let iten = {
        name: itenTilte,
        type: params.type
        
    }
    
    function handleSave(e) {
        e.preventDefault();
        if(params.type === "countList") {
            const iten = {
                name: itenTilte,
                type: params.type,
                quantity: Number(startValue)
            }
            addToBasket(iten)
            navigate("/")
        }
        
        if(iten.type === "goalList") {
            iten.quantity = Number(startValue)
            iten.goalValue = Number(endValue)
            addToBasket(iten)
            navigate(-1)
        }

        if(iten.type === "toDo") {
            iten.complited = false
            
            console.log("new", iten)
            addToBasket(iten)
            navigate(-1)
        }
    }
    
    const content = {
        "countList" : 
        <>
            <Input 
                title="Titulo do iten"
                name="title"
                placeholder="Nome do iten."
                onChange={e => setItenTilte(e.target.value)}
                />
            <div className="counterWropper">
                <Counter
                    title={"Qauntidade inicial"}
                    onStartValueChange={handleStartCounterValue}
                    initialValue={0}
                    onValueChange={(counterValue) => {setStartValue(counterValue);}}
                    color={"#fff"}
                    />
            </div>

        </>,
        "goalList":
        <>
            <Input
                title="Titulo do iten"
                name="title"
                placeholder="Nome do iten."
                onChange={e => setItenTilte(e.target.value)}
                />
                <Counter
                    title={"Qauntidade inicial"}
                    initialValue={0}
                    onValueChange={(counterValue) => {setStartValue(counterValue);}}
                    color={"#fff"}
                />
                <Counter
                title={"Qauntidade a atingir"}
                    initialValue={0}
                    onValueChange={(counterValue) => {setEndValue(counterValue);}}
                    color={"#fff"}
                />
        </>,
        "toDo": 
        <>
        <Input 
        title="Titulo da tarefa"
        name="title"
        placeholder="De um nome paraa sua tarefa."
        onChange={e => setItenTilte(e.target.value)}
        />     
        </>
    }

    return (
        <Container>
            <Header/>
            <Content>
                <Pagination/>
                <>
                    <Form action="">
                        {content[params.type]}
                        <Button onClick={handleSave} title={"Salvar"} backgroundColor={"#ddff45"}/>

                    </Form>
                </>
            </Content>
        </Container>
    )
}