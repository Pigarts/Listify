import { Container } from "./style";

export function IconButton({children, icon: Icon, ...rest }) {
    return (
        <Container  
            type="button" {...rest}>
            {Icon && <Icon size={25}/>}
            {
                children
            }
        </Container>
    )
}