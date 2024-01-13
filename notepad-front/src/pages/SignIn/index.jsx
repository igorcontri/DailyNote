import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignIn() {
  const data = useAuth();
  console.log("My context =>", data);
  return (
    <Container>
      <Form>
        <h1>Notepad</h1>
        <p>Write Ideas</p>

        <h2>Log in</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Sign In" />

        <Link to="/register">Create Account</Link>
      </Form>
      <Background />
    </Container>
  );
}
