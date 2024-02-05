import { useEffect, useRef, useState } from "react";
import { Container, Title } from "./styles";
import { IconButton } from "../iconButton";
import { Icon_Down_Arrow, Icon_Up_Arrow } from "../Icons";

export function Acordeon({ title, color, backgroundColor, children, ...rest }) {
    const [toggle, setToggle] = useState(false)
    const [height, setHeight] = useState("");

    const refHeight = useRef()
    
    const toggleState = () => {
        setToggle(!toggle)
        setHeight(`${refHeight.current.scrollHeight}px`)
    }

    useEffect(() => {
        if (toggle) {
            setHeight(`${refHeight.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [toggle]);useEffect(() => {
        console.log(height);
        setHeight("")
    }, [])
    return (
        <Container {...rest} style={{backgroundColor: backgroundColor ? `${backgroundColor}`: "#ffffff0", color: color ? `${color}`: "#ffffff" }}>
            <Title>
            <span>{title}</span>
            <IconButton onClick={toggleState} className={toggle ? " animated" : ""}>
                {toggle ? <Icon_Up_Arrow/> : <Icon_Down_Arrow/>}
            </IconButton>

            </Title>
            <div
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${height}` : `0px`, margin: "15px" } }
            ref={refHeight}
            >
                {children}
            </div>
           
        </Container>
)
}