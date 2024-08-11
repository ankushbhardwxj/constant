import { useAuth0 } from "@auth0/auth0-react";

function Auth0() {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  );
}

export default Auth0;
