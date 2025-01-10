import styled from 'styled-components';
import { getRandomHexColor } from 'utils/hexGenerator';

export const StyledItem = styled.li`
display:flex;
gap: ${p => p.theme.space[2]}px;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: ${getRandomHexColor};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const StyledPiece = styled.span`
  font-size: ${p => (p.number ? p.theme.fontSizes[5] : p.theme.fontSizes[3])}px;
  color: ${p => p.theme.colors.statText};
`;
