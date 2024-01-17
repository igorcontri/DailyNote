import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Insert all informations!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User Registered Successfully");
        navigate("/");
      })
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        } else {
          alert("Registration Failed");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Notepad</h1>
        <p>Write Ideas</p>

        <h2>Create Account</h2>

        <Input
          placeholder="User"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Sign Up" onClick={handleSignUp} />

        <Link to="/"> Back to Log in</Link>
      </Form>
    </Container>
  );
}
