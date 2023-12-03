import { Container } from './styled'

export function Button({ title }) {
    return (
        <Container type="button">
            {title}
        </Container>
    )
}