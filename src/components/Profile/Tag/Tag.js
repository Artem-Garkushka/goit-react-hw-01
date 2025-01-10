import PropTypes from 'prop-types';
import { StyledTag } from './Tag.styled';

export const Tag = ({ tag }) => {
  return <StyledTag>@{tag}</StyledTag>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};