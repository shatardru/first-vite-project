import { useLoaderData } from "react-router-dom";

const SingleUserDetails = () => {

const user= useLoaderData();
console.log(user,"gfh");
  return (
    <div>
      <h1>single user details</h1>
    </div>
  );
};

export default SingleUserDetails;
