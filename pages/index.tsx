import type { NextPage } from "next";
import { useAuth, AuthContextType } from "../context/AuthContext";
import NavBar from "../components/NavBar";
const Home: NextPage = () => {
  const user: AuthContextType = useAuth();

  return (
    <div>
      <NavBar />
      <h1 className="bg-yellow-400">{user.userType}</h1>
    </div>
  );
};

export default Home;
