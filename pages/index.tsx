import type { NextPage } from "next";
import { useAuth, AuthContextType } from "../context/AuthContext";

import NavBar from "../components/share/NavBar";
import Footer from "../components/share/Footer/Footer";

import HeroSection from "../components/homePage/config/HeroSession/HeroSection";
import FeatureSession from "../components/homePage/config/FeatureSession/FeatureSession";
import LogoClouds from "../components/homePage/config/LogoCloud/LogoClouds";

const Home: NextPage = () => {
  const user: AuthContextType = useAuth();

  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSession />
      <LogoClouds />
      <Footer />
    </div>
  );
};

export default Home;
