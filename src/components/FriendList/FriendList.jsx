import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendsListWrapper>
  );
};
