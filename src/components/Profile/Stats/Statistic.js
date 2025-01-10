import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatsUnit, StatItem } from './Statistic.styled';

export const Statistic = ({ followers, views, likes }) => {
  return (
    <Box as="ul" display="flex" bg="#f3f6f9">
      <StatsUnit>
        <StatItem>Followers</StatItem>
        <StatItem accent>
          {followers.toString().slice(0, -3) +
            `,` +
            followers.toString().slice(-3, followers.length)}
        </StatItem>
      </StatsUnit>
      <StatsUnit>
        <StatItem>Views</StatItem>
        <StatItem accent>
          {views.toString().slice(0, -3) +
            `,` +
            views.toString().slice(-3, views.length)}
        </StatItem>
      </StatsUnit>
      <StatsUnit>
        <StatItem>Likes</StatItem>
        <StatItem accent>
          {likes.toString().slice(0, -3) +
            `,` +
            likes.toString().slice(-3, likes.length)}
        </StatItem>
      </StatsUnit>
    </Box>
  );
};

Statistic.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};