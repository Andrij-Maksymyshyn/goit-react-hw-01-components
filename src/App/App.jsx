import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendList/FriendList';
import { Container } from './App.styled';
import user_info from '../user_info.json';
import statisticList from '../data_statistics.json';
import friendsCatalogue from '../friends.json';

const userData = user_info;

export function App() {
  return (
    <Container>
      <Profile
        avatar={userData.avatar}
        tagName={userData.tag}
        userName={userData.username}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticList} />

      <FriendList friends={friendsCatalogue} />
    </Container>
  );
}
