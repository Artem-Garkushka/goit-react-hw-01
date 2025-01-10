import PropTypes from 'prop-types';
import { StyledItem, StyledPiece  } from './ListItems.styled';

export const ListItems = ({ stats }) => {
    return (
    <StyledItem>
      <StyledPiece>{stats.label}</StyledPiece>
      <StyledPiece number>{stats.percentage}&#37;</StyledPiece>
    </StyledItem>
  );
};

ListItems.propTypes = {
    stats: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
  })
};