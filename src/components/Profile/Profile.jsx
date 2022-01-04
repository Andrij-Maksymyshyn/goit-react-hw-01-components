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
  stats: { followers, views, likes },
}) {
  return (
    <ProfileBox>
      <DescriptionBox>
        <Depiction src={avatar} alt={tagName} />
        <NameSize>{userName}</NameSize>
        <TagSize>{tagName}</TagSize>
        <TagSize>{location}</TagSize>
      </DescriptionBox>

      <Menu>
        <Item>
          <span>Followers</span>
          <ItemSpan>{followers}</ItemSpan>
        </Item>
        <Item>
          <span>Views</span>
          <ItemSpan>{views}</ItemSpan>
        </Item>
        <Item>
          <span>Likes</span>
          <ItemSpan>{likes}</ItemSpan>
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
  stats: PropTypes.object.isRequired,
};
