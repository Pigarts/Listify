import { Container } from "./styles";

export function Button({ title, color, backgroundColor, loading = false, icon: Icon, ...rest }) {
    return (
        <Container type="button" {...rest} disabled = {loading} style={{backgroundColor: backgroundColor ? `${backgroundColor}`: "#fff", color: color ? `${color}`: "#000" }}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
)
}