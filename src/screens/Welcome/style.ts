import { Image, ImageProps} from 'react-native';
import styled from 'styled-components/native';

type WelcomeImageProps = ImageProps;

export const Container = styled.View `
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text ``;

export const WelcomeImage = styled.Image<WelcomeImageProps>`
`;

export const Headsup = styled.Text ``;