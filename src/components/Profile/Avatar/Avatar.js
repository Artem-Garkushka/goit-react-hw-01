import PropTypes from 'prop-types';
import { StyledAvatar } from './Avatar.styled';

export const Avatar = ({ source }) => {
  return <StyledAvatar src={source} />;
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
};