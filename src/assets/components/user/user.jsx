
import { Link } from 'react-router-dom';
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className ="card col-lg-4 mt-2 p-5">
      <h2>{name}</h2>
      <p>email : {email}</p>
      <p>phone : {phone}</p>
      <Link to={`${id}`} ><button>click me</button></Link>
    </div>
  );
};

export default User;
