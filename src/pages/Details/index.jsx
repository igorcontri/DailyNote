import { Container, Links, Content } from './styles.js';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details() {

  return (
    <Container>
      <Header />
      
      <main>
        <Content>

        
          <ButtonText title="Clear Page" />

            <h1> Learning React </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat necessitatibus eveniet tenetur voluptatibus magnam et harum? Ipsam obcaecati eos sapiente laudantium minima vitae necessitatibus officia delectus tempore. Minima, debitis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat necessitatibus eveniet tenetur voluptatibus magnam et harum? Ipsam obcaecati eos sapiente laudantium minima vitae necessitatibus officia delectus tempore. Minima, debitis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci placeat necessitatibus eveniet tenetur voluptatibus magnam et harum? Ipsam obcaecati eos sapiente laudantium minima vitae necessitatibus officia delectus tempore. Minima, debitis.
            </p>

          <Section title="Links">
            <Links>
              <li><a href="https://www.google.com" target="_blank">google.com</a></li>
              <li><a href="https://www.google.com" target="_blank">google.com</a></li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="Lorem" />
            <Tag title="Ipsum" />
            <Tag title="Dolor" />
          </Section>
          
          <Button title="Return" />
        </Content>
      </main>
    </Container>
  )
}
   