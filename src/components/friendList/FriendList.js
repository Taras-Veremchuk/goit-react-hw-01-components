import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="item">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
