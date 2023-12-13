import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Create new note</h1>
                        <a href="/">back</a>
                    </header>

                    <Input placeholder="title" />
                    <Textarea placeholder="More details" />
                </Form>
            </main>
        </Container>
    );
}
