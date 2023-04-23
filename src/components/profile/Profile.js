import PropTypes from 'prop-types';
import {
  Avatar,
  Information,
  Item,
  Label,
  List,
  Location,
  Name,
  ProfileSection,
  Quantity,
  Tag,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileSection>
      <Information>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Information>
      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </ProfileSection>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
