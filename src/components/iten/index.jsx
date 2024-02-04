import { useBasket } from "../../hooks/basketManager";
import { Counter } from "../counter";
import { TextButton } from "../textButton";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Iten({ title, initialValue, icon: Icon, $isNew, ...rest }) {
    const [itemAtualValue, setItemAtualValue] = useState(initialValue || 0);
    const { addToBasket } = useBasket();
    const params = useParams();

    const handleValueChange = (newValue) => {
        setItemAtualValue(newValue);
    };
    
    let item = {
        name: title,
        type: params.type || "countList",
        quantity: itemAtualValue 
    };
    
    function save() {
        addToBasket(item);
    }

    useEffect(() => {
        save()
    }, [itemAtualValue]);

    return (
        <Container type="button" {...rest} $isNew={$isNew}>
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

