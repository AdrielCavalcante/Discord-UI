import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; //Alinhado verticalmente
  justify-content: center; //Alinhado horizontalmente
  flex-shrink: 0; //Não é diminuido

  width: 48px;
  height: 48px;

  margin-bottom: 8px;

  background-color: ${props => props.isHome ? 'var(--OneUx)' : 'var(--primary)'};

  cursor: pointer;
  position: relative;
`;