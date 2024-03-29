import { Outlet } from "react-router-dom";
import Header from "./../header/header";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>This is Home page</h1>
      <Outlet></Outlet>
    </div>
  );
};
export default Home;
