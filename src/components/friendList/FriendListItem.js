import PropTypes from 'prop-types';
import { Item, Span, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Span style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Span>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
