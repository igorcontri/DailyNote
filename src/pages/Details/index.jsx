import { Container, Links } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details() {

  return (
    <Container>
      <Header />
      
      <Section title="Links">
        <Links>
          <li><a href="https://www.google.com" target="_blank">google.com</a></li>
          <li><a href="https://www.google.com" target="_blank">google.com</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
       <Tag title="Hello," />
       <Tag title="my" />
       <Tag title="name" />
       <Tag title="is" />
      </Section>
      
      <Button title="Return" />
    </Container>
  )
}
   