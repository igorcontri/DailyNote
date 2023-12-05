import { Container, Links } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

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
      
      <Button title="Return" />
    </Container>
  )
}
   