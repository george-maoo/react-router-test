import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>index page</h1>
      <p>links to other pages:</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
