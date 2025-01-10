import PropTypes from 'prop-types';
import { Friend } from './Friend/FriendItem';
import { Box } from 'components/Box';

export const Friends = ({ friends }) => {
  return (
    <Box as="ul" mt={5} display="flex" flexDirection="column" gap={2}>
      {friends.map(friend => (
        <Friend key={friend.id} friends={friend}></Friend>
      ))}
    </Box>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};