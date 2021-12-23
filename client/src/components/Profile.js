import React, { useContext } from "react";

import { NoteContext } from './NoteContext';

const Profile = () => {
  const {
    currentUser,
    isAuthenticated,
    isLoading
  } = useContext(NoteContext);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <h2>{currentUser.nickname}</h2> */}
        <img src={currentUser.picture}/>
        {/* <img src={currentUser.picture} alt={currentUser.name} />
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p> */}
      </div>
    )
  );
};

export default Profile;