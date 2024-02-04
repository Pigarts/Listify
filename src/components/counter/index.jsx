import { Container, Content, Number } from "./styles";
import { IconButton } from "../iconButton";
import { Icon_Minus, Icon_Plus } from "../Icons";
import { useState } from "react";

export function Counter({ title, initialValue, onValueChange, color }) {
    const [number, setNumber] = useState(initialValue || 0);

    function handlePlusButton() {
        setNumber(number + 1);
        onValueChange && onValueChange(number + 1);
    }

    function handleMinusButton() {
        if (number <= 0) {
            return;
        }
        setNumber(number - 1);
        onValueChange && onValueChange(number - 1);
    }

    function handleInputChange(event) {
        const newValue = parseInt(event.target.value, 10) || 0;
        setNumber(newValue);
        onValueChange && onValueChange(newValue);
    }

    return (
        <Container>
            {
                title&&
            <span>{title}</span>
            }
        <Content>
            <IconButton className="buttton" onClick={handleMinusButton} >
            <Icon_Minus color={color ? color : "#000"}/>
            </IconButton>
            <Number
                type="number"
                value={number}
                onChange={handleInputChange}
                style={{color: color ? `${color}`: "#000"}}
                />
            <IconButton className="buttton" onClick={handlePlusButton} >
                <Icon_Plus color={color ? color : "#000"}/>
            </IconButton>

        </Content>
    </Container>
    );
}
