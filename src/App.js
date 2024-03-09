import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {

  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");

  return (
   <div className="">
    <Navbar setCategory={setCategory} setCountry={setCountry}></Navbar>
    <NewsBoard category={category} country={country}></NewsBoard>
   </div>
  );
}

export default App;
