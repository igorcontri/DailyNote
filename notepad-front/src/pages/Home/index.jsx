import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notepad</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <ul>
          <li>
            <ButtonText title="All" isActive />
          </li>
          <li>
            <ButtonText title="Frontend" />
          </li>
          <li>
            <ButtonText title="Node" />
          </li>
          <li>
            <ButtonText title="React" />
          </li>
        </ul>
      </Menu>

      <Search>
        <Input placeholder="Search for title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Notes">
          <Note
            data={{
              title: "Example",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "frontend" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  );
}
