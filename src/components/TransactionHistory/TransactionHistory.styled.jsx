import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  tr:nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableHead = styled.thead`
  background-color: gray;
  height: 20px;
`;

export const TableRow = styled.tr`
  height: 20px;
  text-align: center;
  tr:nth-child(odd) {
    background-color: whitesmoke;
  }
`;
