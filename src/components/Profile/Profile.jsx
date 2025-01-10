import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.box}>
      <div className={css.profile}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listLi}>
          <span>Followers</span>
          <span className={css.stats}>{followers}</span>
        </li>
        <li className={css.listLi}>
          <span>Views</span>
          <span className={css.stats}>{views}</span>
        </li>
        <li className={css.listLi}>
          <span>Likes</span>
          <span className={css.stats}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
