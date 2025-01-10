import PropTypes from 'prop-types';
import { Status, Avatar } from './FriendsDesc.styled';
import { Friend } from './FriendName';

export const FriendDescription = ({ friends }) => {
  return (
    <>
      <Status friends={friends} />
      <Avatar src={friends.avatar} alt="User avatar" width={48} />
      <Friend friends={friends} />
    </>
  );
};

FriendDescription.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};