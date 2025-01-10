import PropTypes from 'prop-types';

import { Avatar, Title, Tag, UserLocation, Statistic } from './index';
import { Box } from 'components/Box';

export const Profile = ({ user }) => {
  return (
    <Box
      maxWidth="320px"
      textAlign="center"
      pt={4}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      as="section"
    >
      <Avatar source={user.avatar} />
      <Title name={user.username} />
      <Tag tag={user.tag} />
      <UserLocation location={user.location} />
      <Statistic
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Box>
  );
};

Profile.propTypes = {
  Profile: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: {
        followers: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired,
        likes: PropTypes.string.isRequired,
      },
    })
  ),
};
