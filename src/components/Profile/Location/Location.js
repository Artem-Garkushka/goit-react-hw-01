import PropTypes from 'prop-types';
import { StyledLocation } from './Location.styled';

export const UserLocation = ({ location }) => {
  return <StyledLocation>{location}</StyledLocation>;
};

UserLocation.propTypes = {
  location: PropTypes.string.isRequired,
};