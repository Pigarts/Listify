import { useEffect, useState } from "react";
import { Checkbox } from "../checkbox";
import { Container } from "./styles";
import { TextButton } from "../textButton";
import { useBasket } from "../../hooks/basketManager";
import { useParams } from "react-router-dom";
import { Icon_Close } from "../Icons";
import { IconButton } from "../iconButton";

export function ToDoIten({ title, complited, color, backgroundColor, $isNew, ...rest }) {
    const [isChecked, setIsChecked] = useState(complited || false);
    const { addToBasket, deleteTodoIten } = useBasket();
    const params = useParams

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

    const deleteIten = () => {
        let item = {
            name: title,
            type: params.type || "toDo",
            complited: isChecked
        };
        deleteTodoIten(item)
    };

    useEffect(() => {

    let item = {
        name: title,
        type: params.type || "toDo",
        complited: isChecked
    };
    addToBasket(item)
    }, [isChecked])

    return (
        <Container onClick={toggleCheckbox} {...rest} style={{backgroundColor: isChecked ? "#ddff45": "#ddff4571"}}>
        <>
            {$isNew ? 
                <TextButton
                    className="add"
                    title={"Adicionar um novo iten."}
                    onClick={() => navigate("/neewiten")}
                />
                : 
            <>
                <Checkbox checked={isChecked} onChange={toggleCheckbox} /> 
               <span className="title"> {title}</span>
               <IconButton onClick={deleteIten}>
               <Icon_Close color={"#000"}/>
               </IconButton>
            </>
            }
            </>
                </Container>
            
)
}