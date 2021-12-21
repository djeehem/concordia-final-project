import React, { useContext } from "react";

import { NoteContext } from './NoteContext';

const Profile = () => {
  const {
    currentUser,
    userIsAuthenticated,
    userIsLoading
  } = useContext(NoteContext);

  if (userIsLoading) {
    return <div>Loading ...</div>;
  }

  return (
    userIsAuthenticated && (
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