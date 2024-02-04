import { Container } from "./style";

export function TextButton({children, icon: Icon, title, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {Icon && 
                <Icon size={25}/>
            }
            {title}
            {children &&
                {children}
            }
        </Container>
    )
}