import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Background } from "./styles";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Notepad</h1>
                <p>Write Ideas</p>

                <h2>Log in</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input placeholder="Password" type="password" icon={FiLock} />

                <Button title="Sign In" />

                <ButtonText title="Create account" isActive />
            </Form>
            <Background />
        </Container>
    );
}
