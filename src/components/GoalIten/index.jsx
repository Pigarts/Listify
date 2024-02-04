import { useBasket } from "../../hooks/basketManager";
import { Counter } from "../counter";
import { TextButton } from "../textButton";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function GoalIten({ title, initialValue, icon: Icon, $isNew, ...rest }) {
    const [goallValue, setGoalValue] = useState(100);
    const [complited, setComplited] = useState(false);

    const [itemAtualValue, setItemAtualValue] = useState(initialValue || 0);
    const { addToBasket, screenGoalBasket } = useBasket();
    const params = useParams();

    const handleValueChange = (newValue) => {
        setItemAtualValue(newValue);
    };
    
    
    
    
    let item = {
        name: title,
        type: params.type || "goalList",
        quantity: itemAtualValue 
    };
    
    const memoryIten = screenGoalBasket
        .filter(item => item.type === "goalList" && item.name == title)[0]

    function save() {
        addToBasket(item);
    }
    
    useEffect(() => {
        itemAtualValue >= memoryIten.goalValue ? setComplited(true) : setComplited(false)
            
        
        // Ao atualizar o valor atualizado do contador, chame addToBasket com o novo valor
        save()
    }, [itemAtualValue]);

    return (
        <Container type="button" {...rest} $isNew={$isNew} style={{backgroundColor: complited ? "#ddff45": "#ddff4571"}}>
            {$isNew ? (
                <TextButton className="add" title={"Adicionar um novo item."} />
            ) : (
                <>
                    <Counter
                        initialValue={initialValue}
                        onValueChange={(counterValue) => {
                            handleValueChange(counterValue);
                        }}
                    />
                    <TextButton className="title" title={title} />
                    {Icon && <Icon size={25} />}
                </>
            )}
        </Container>
    );
}

