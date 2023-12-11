import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.frienslist}>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
};

export { FriendList };
