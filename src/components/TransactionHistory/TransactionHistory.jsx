import PropTypes from 'prop-types';
import { TableBox, TrHead, TrBody, Th, Td } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TableBox>
      <thead>
        <TrHead>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TrHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrBody key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </TrBody>
        ))}
      </tbody>
    </TableBox>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
