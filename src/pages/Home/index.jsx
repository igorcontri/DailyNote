import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notepad</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <ul>
                    <li>Todos</li>
                    <li>Frontend</li>
                    <li>Node</li>
                    <li>React</li>
                </ul>
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote>
                <h1> + Criar Nota </h1>
            </NewNote>
        </Container>
    );
}
