import PropTypes from "prop-types";
import s from "./profile.module.css";
const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props.user;

  return (
    <div className={s.card_wrapper}>
      <div className={s.card}>
        <div className={s.img_wrapper}>
          <img width="150" src={avatar} alt="User avatar" />
        </div>
        <p className={s.user_name}>{username}</p>
        <p className={s.user_data}>&#64;{tag}</p>
        <p className={s.user_data}>{location}</p>
      </div>

      <ul className={s.profile_list}>
        <li className={s.list_item}>
          <span>Followers</span>
          <span className={s.count}>{stats.followers}</span>
        </li>
        <li className={s.list_item}>
          <span>Views</span>
          <span className={s.count}>{stats.views}</span>
        </li>
        <li className={s.list_item}>
          <span>Likes</span>
          <span className={s.count}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Profile;
