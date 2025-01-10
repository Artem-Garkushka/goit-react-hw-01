import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <span
      className={isOnline ? styles.statusOnline : styles.statusOffline}
    ></span>
    <img className={styles.avatar} src={avatar} alt="Friend avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
