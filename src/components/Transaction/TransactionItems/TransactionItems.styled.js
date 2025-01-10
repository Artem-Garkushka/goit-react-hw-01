import styled from 'styled-components';

export const StyledItem = styled.tr`
  text-align: center;
  color: ${p => p.theme.colors.tableText};
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.tableRowAccent};
  }
`;

export const StyledPiece = styled.td`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;