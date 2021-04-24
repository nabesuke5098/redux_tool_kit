import React from "react";
import { auth } from "../firebase";
import TweerInput from "./TweerInput ";

const Feed = () => {
  return (
    <div>
      Feed
      <TweerInput />
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
