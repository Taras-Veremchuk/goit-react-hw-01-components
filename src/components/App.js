import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
