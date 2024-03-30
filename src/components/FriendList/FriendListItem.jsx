import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.item_wrapper}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx({ [s.online]: isOnline, [s.offline]: !isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
