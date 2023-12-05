import { Container } from './styled'

export function Button({ title, loading, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}       
        >
            {/* if "loading": 'loading...' else: title */}
            {loading ? 'Loading...' : title}
        </Container>
    )
}