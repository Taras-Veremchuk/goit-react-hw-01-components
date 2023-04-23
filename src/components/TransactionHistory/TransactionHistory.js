import PropTypes from 'prop-types';
import { BodyEl, BodyLine, HeadEl, Table } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <HeadEl>Type</HeadEl>
          <HeadEl>Amount</HeadEl>
          <HeadEl>Currency</HeadEl>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyLine key={id}>
            <BodyEl>{type}</BodyEl>
            <BodyEl>{amount}</BodyEl>
            <BodyEl>{currency}</BodyEl>
          </BodyLine>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default TransactionHistory;
