import styled from 'styled-components';
import { Hashtag } from '@styled-icons/heroicons-outline';
import { Notifications, People } from '@styled-icons/material';

export const Container = styled.div`
  grid-area: ChannelInfo;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 17px;

  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;
export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;
export const Title = styled.h1`
  margin-left: 9px;

  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;
export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;
export const Description = styled.span`
  font-size: 15px;
  
  color: var(--gray);
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25%;

  > svg:first-child {
    margin-left: 22vw;
  }

  > svg{
    margin-left: 15px;
  }

  > svg:last-child {
    margin-left: 17px;
  }
`;

export const NotificationIcon = styled(Notifications)`
  width: 24px;
  height: 24px;

  color: var(--gray);
  opacity: .7;
  cursor: pointer;

  transition: .2s;

`;

export const PeopleIcon = styled(People)`
  width: 24px;
  height: 24px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: .2s;
`;