import styled from 'styled-components';

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => (p.friends.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.border};
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: 700;
`;