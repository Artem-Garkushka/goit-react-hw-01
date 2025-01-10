import styled from 'styled-components';

export const StyledHead = styled.thead`
  background-color: ${p => p.theme.colors.tableHead};
`;

export const StyledHeadTitle = styled.th`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: ${p => p.theme.colors.white};
`;