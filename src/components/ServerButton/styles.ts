import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center; //Alinhado verticalmente
  justify-content: center; //Alinhado horizontalmente
  flex-shrink: 0; //Não é diminuido

  width: 48px;
  height: 48px;
  border-radius: ${props => props.isHome ? '16px' : '50%'};

  margin-bottom: 8px;

  background-color: ${props => props.isHome ? '' : 'var(--primary)'};

  cursor: pointer;
  position: relative;

  > img{
    display: block;
    width: 48px;
    height: 48px;
    -o-object-fit: cover;
    object-fit: cover;
    pointer-events: none;
    border-radius: 16px;
   
}

  &::before{ //white ball
    width: 9px;
    height: 9px;

    position: absolute;

    left: -17px;
    top: calc(50%-4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }

  &::after{ //red ball
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;

    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quartenary);

    font-size: 13px;
    text-align: right;
    font-weight: bold;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}'; //Se tiver menção, pega o n°
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover{
    border-radius: 16px;
    background-color: ${props => props.isHome ?  'red' : 'var(--discord)'};
  }
`;