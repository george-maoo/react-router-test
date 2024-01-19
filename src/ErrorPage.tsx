import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>This route doesnt exist :(</h1>
      <Link to="/">Back to index</Link>
    </div>
  );
};

export default ErrorPage;
