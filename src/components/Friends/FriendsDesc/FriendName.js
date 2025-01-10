import { FriendName } from './FriendsDesc.styled';

export const Friend = ({ friends }) => {
  return <FriendName>{friends.name}</FriendName>;
};