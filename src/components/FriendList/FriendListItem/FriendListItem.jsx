import PropTypes from 'prop-types';
import { ImConnection } from 'react-icons/im';
import { CgToggleOff } from 'react-icons/cg';
import { FriendItem, FriendImg, FriendName } from './FriendListItem.styled';

const status = state =>
  state ? <ImConnection color="green" /> : <CgToggleOff color="red" />;

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <FriendItem>
      <span className="status">{status(isOnline)}</span>
      <FriendImg src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
