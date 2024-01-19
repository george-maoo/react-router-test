import { useParams } from "react-router-dom";
import Popeye from "./Popeye.tsx";
import Spinach from "./Spinach.tsx";
import DefaultProfile from "./DefaultProfile.tsx";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>hope you doing good :)</p>
      <hr />
      <h2>Profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
