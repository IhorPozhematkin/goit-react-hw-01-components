import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  padding-top: 10px;
  background-color: gray;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0 auto;
  padding-bottom:10px;
`;

export const StatList = styled.ul`
display: flex;
width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ color }) => color};
`;

export const Label = styled.span`
     font-size: 20px;
`

export const Percentage = styled.span`
  font-size: 20px;
`;
