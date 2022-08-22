import React from 'react';

import { Container, Title, WelcomeImage, Headsup } from './style';

export const Welcome: React.FC = () => {
  return(
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas de {'\n'}
        forma fácil
      </Title>
      <WelcomeImage source={{uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}} />
      <Headsup>
        Não esqueça mais de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Headsup>
    </Container>
  )
}