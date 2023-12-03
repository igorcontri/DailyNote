import { Container } from './styles.js';

import { Button } from '../../components/Button/index.jsx';

export function Details() {

  return (
    <Container>
      <h1>Hello World!</h1>
      <p>component</p>
      <Button title="Sign In" loading/>
      <Button title="Sign Up" loading/>
      <Button title="Return" loading/>

    </Container>
  )
}
   