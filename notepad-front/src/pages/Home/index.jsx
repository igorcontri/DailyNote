import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import { api } from "../../services/api";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get("/tags");
      setTags(res.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Notepad</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" isActive />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText title={tag.name} />
            </li>
          ))}
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
