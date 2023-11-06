import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: 10px;
  background-color: lightgray;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 300px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Tag = styled.p`
  font-weight: 500;
`;

export const Location = styled.p`
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkgray;
  width: 80px;
`;

export const Label = styled.span`
  color: blue;
`;

export const Quantity = styled.span`
  color: lime;
`;
