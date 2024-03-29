import { useLoaderData } from "react-router-dom";
import User from './../user/user';

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2> Our Users: {users.length}</h2>
      <p>Lorem ipsum dolor sit ame</p>
      <div className="row">
        {users.map((user,index) => (
          <User key={index} user={user}></User>
        ))}
      </div>
    </div>
  );
};
export default Users;
