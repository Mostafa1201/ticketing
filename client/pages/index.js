import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>;
};

// This is executed during the server side rendering
// It also gets executed on the client whenever we navigate from one route to another
// INSIDE the application
LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default LandingPage;