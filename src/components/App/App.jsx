import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
import userInfo from '../../data/user_info.json';
import statisticList from '../../data/data_statistics.json';
import friendsCatalogue from '../../data/friends.json';
import dataTransactions from '../../data/transactions.json';

const userData = userInfo;

export function App() {
  return (
    <Container>
      <Profile
        avatar={userData.avatar}
        tagName={userData.tag}
        userName={userData.username}
        location={userData.location}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticList} />

      <FriendList friends={friendsCatalogue} />

      <TransactionHistory items={dataTransactions} />
    </Container>
  );
}
