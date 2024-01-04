import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
    return (
        <Container>
            <Background />
            <Form>
                <h1>Notepad</h1>
                <p>Write Ideas</p>

                <h2>Create Account</h2>

                <Input placeholder="User" type="text" icon={FiUser} />

                <Input placeholder="E-mail" type="text" icon={FiMail} />

                <Input placeholder="Password" type="password" icon={FiLock} />

                <Button title="Sign Up" />

                <Link to="/"> Back to Log in</Link>
            </Form>
        </Container>
    );
}
