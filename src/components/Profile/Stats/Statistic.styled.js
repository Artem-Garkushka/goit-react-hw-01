import styled from 'styled-components';

export const StatsUnit = styled.li`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.border};
  width: 33%;
  display: flex;
  gap: ${p => p.theme.space[1]}px;
  flex-direction: column;
`;

export const StatItem = styled.span`
  color: ${p =>
    p.accent ? p.theme.colors.primaryText : p.theme.colors.secondaryText};
  font-weight: ${p => (p.accent ? 'bold' : 'normal')};
`;