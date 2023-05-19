import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        {JSON.stringify(user)}

        <h1>Usuario: {user.given_name + " " + user.family_name}</h1>
        <img src={user.picture} alt="" />
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;
