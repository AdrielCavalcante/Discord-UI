import styled from 'styled-components';
import { Mic, Headset, Settings } from '@styled-icons/material';

export const Container = styled.div`
  grid-area: UserInfo;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--primary);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    letter-spacing: 0.5px;
    color: var(--white);
    display: block;
  }

  > span{
    color: var(--gray);
    font-size: 12px;

    margin-left: -1px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 10px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 22px;
  height: 22px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: .2s;

  &:hover{
    opacity: 1;
  }
`;

export const HeadPhoneIcon = styled(Headset)`
  width: 22px;
  height: 22px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: .2s;

  &:hover{
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 22px;
  height: 22px;

  margin-right: 2px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: .2s;

  &:hover{
    opacity: 1;
  }
`;