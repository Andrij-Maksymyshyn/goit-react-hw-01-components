import PropTypes from 'prop-types';
import {
  ProfileBox,
  DescriptionBox,
  Depiction,
  NameSize,
  TagSize,
  Menu,
  Item,
  ItemSpan,
} from './Profile.styled';

export function Profile({
  avatar,
  userName,
  tagName,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileBox className="profile">
      <DescriptionBox className="description">
        <Depiction src={avatar} alt={tagName} className="avatar" />
        <NameSize className="name">{userName}</NameSize>
        <TagSize className="tag">{tagName}</TagSize>
        <TagSize className="location">{location}</TagSize>
      </DescriptionBox>

      <Menu className="stats">
        <Item>
          <span className="label">Followers</span>
          <ItemSpan className="quantity">{followers}</ItemSpan>
        </Item>
        <Item>
          <span className="label">Views</span>
          <ItemSpan className="quantity">{views}</ItemSpan>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <ItemSpan className="quantity">{likes}</ItemSpan>
        </Item>
      </Menu>
    </ProfileBox>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
