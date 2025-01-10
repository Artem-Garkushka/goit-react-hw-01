import styled from 'styled-components';

export const StyledFriend = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  width: 200px;
  padding: ${p => p.theme.space[2]}px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;