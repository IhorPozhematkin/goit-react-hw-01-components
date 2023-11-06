import { Table, TableHead, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <TableRow key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
