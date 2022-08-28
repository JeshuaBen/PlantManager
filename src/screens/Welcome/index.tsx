import React from 'react';

import { Container, Title, WelcomeImage, Headsup } from './style';

import IlustrationImage from '../../../assets/ilustra.png';

export const Welcome: React.FC = () => {
  return(
    <Container>
      <Title>
        Gerencie {'\n'} 
        suas plantas de {'\n'}
        forma fácil
      </Title>
      <WelcomeImage source={IlustrationImage} />
      <Headsup>
        Não esqueça mais de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Headsup>
    </Container>
  )
}