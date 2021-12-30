import { Profile } from '../components/Profile/Profile';
import { Container } from './App.styled';
import user_info from '../user_info.json';

const userData = user_info;

export function App() {
  return (
    <Container className="App">
      <Profile
        avatar={userData.avatar}
        tagName={userData.tag}
        userName={userData.username}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </Container>
  );
}
