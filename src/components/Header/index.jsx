import { Container, Profile } from './styles';

export function Header() {
    return(
        <Container>
            <Profile>
                <img
                    src="https://github.com/igorcontri.png"
                />

                <div>
                    <span>Welcome</span>
                    <strong>Igor Contri</strong>
                </div>
            </Profile>
        </Container>
    );
}