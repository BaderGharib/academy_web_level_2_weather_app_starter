import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";

export default function App() {
  return (
    <>
      {/* <Search /> */}

      <WeatherNow />
    </>
  );
}
