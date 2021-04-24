import React from "react";
import styles from "./Feed.module.css";
import { auth } from "../firebase";
import TweerInput from "./TweerInput ";

const Feed = () => {
  return (
    <div className={styles.feed}>
      Feed
      <TweerInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
