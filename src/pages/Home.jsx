import { useState } from "react";
import WeatherSearch from "../pages/Weathersearch";
import SearchHistory from "../pages/history/SearchHistory";

function Home() {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

  const addToHistory = (city) => {
    const updatedHistory = [...history, city];
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  return (
    <div>
      <WeatherSearch addToHistory={addToHistory} />
      <SearchHistory />
    </div>
  );
}

export default Home;
