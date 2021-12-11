import React, { useContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

import { NoteContext } from './NoteContext';

const Profile = () => {
  const {
    currentUser,
    userIsAuthenticate,
    userIsLoading
  } = useContext(NoteContext);
  // const { user, isAuthenticated, isLoading } = useAuth0();

  if (userIsLoading) {
    return <div>Loading ...</div>;
  }

  return (
    userIsAuthenticate && (
      <div>
        <h2>{currentUser.nickname}</h2>
        {/* <img src={currentUser.picture} alt={currentUser.name} />
        <h2>{currentUser.name}</h2>
        <p>{currentUser.email}</p> */}
      </div>
    )
  );
};

export default Profile;