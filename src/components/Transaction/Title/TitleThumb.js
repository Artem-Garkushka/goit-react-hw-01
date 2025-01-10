import PropTypes from 'prop-types';
import { StyledHead, StyledHeadTitle } from './TitleThumb.styled';

export const Head = ({ typeTitle, amountTitle, currencyTitle }) => {
  return (
    <StyledHead>
      <tr>
        <StyledHeadTitle>{typeTitle.toUpperCase()}</StyledHeadTitle>
        <StyledHeadTitle>{amountTitle.toUpperCase()}</StyledHeadTitle>
        <StyledHeadTitle>{currencyTitle.toUpperCase()}</StyledHeadTitle>
      </tr>
    </StyledHead>
  );
};

Head.propTypes = {
  typeTitle: PropTypes.string.isRequired,
  amountTitle: PropTypes.string.isRequired,
  currencyTitle: PropTypes.string.isRequired,
};