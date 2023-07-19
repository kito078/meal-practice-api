import React from "react";
import Navbar from "../components/layout/Navbar";
import UserResults from "../components/user/UserResults";
import SearchMeal from "../components/user/SearchMeal";

function Home() {
  return (
    <div>
      <SearchMeal />
      <UserResults />
    </div>
  );
}

export default Home;
