import PropTypes from 'prop-types';
import { StyledItem, StyledPiece } from './TransactionItems.styled';

export const RowItem = ({ type, amount, currency }) => {
  return (
    <StyledItem>
      <StyledPiece>
        {type.slice(0, 1).toUpperCase() + type.slice(1, type.length)}
      </StyledPiece>
      <StyledPiece>{amount}</StyledPiece>
      <StyledPiece>{currency}</StyledPiece>
    </StyledItem>
  );
};

RowItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};