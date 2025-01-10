import PropTypes from 'prop-types';
import { StyledList } from './Stats.styled';
import { ListItems } from '../ListItems/ListItems';

export const List = ({ stats }) => {
  return (
    <StyledList>
      {stats.map(stat => (
        <ListItems stats={stat} key={stat.id} />
      ))}
    </StyledList>
  );
};

List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};