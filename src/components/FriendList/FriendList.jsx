import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsMenu } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendsMenu>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} className="item" />
      ))}
    </FriendsMenu>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
