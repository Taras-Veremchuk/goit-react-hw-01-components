import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">{isOnline ? 'green' : 'red'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
