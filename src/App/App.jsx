import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendList/FriendList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
import userInfo from '../Data/user_info.json';
import statisticList from '../Data/data_statistics.json';
import friendsCatalogue from '../Data/friends.json';
import dataTransactions from '../Data/transactions.json';

const userData = userInfo;

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

      <TransactionHistory items={dataTransactions} />
    </Container>
  );
}
