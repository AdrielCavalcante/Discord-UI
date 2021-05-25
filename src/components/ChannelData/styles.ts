import styled from 'styled-components';
import { AlternateEmail } from '@styled-icons/material';

export const Container = styled.div`
  grid-area: ChannelData;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  margin-right: 3px;
  margin-bottom: -1px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 45px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
    border-radius: 45px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0px 10px 0 57px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder{
    color: var(--gray);
  }

  ~ svg{
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon  = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: var(--gray);
`;