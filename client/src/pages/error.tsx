import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/dashboard">Go back to the home page</Link>
    </div>
  );
};

export default Error;
