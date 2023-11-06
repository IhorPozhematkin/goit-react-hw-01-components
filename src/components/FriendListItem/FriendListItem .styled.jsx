import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $status }) => ($status ? 'green' : 'red')};
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90%;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 1) 2px 2px 2px 2px;
`;

export const UserName = styled.p`
  font-size: 20px;
`;
