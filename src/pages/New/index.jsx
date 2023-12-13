import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";

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

                    <Section title="Util Links">
                        <NoteItem />
                    </Section>
                </Form>
            </main>
        </Container>
    );
}
