import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
