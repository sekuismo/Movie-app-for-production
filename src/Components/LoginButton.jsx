import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg text-lg"
      >
        Login
      </button>
    </div>
  );
}

export default LoginButton;
