import { useState } from "react";

function SearchHistory() {
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

  const deleteEntry = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  return (
    <div className="container">
      <h2>Search History</h2>
      {history.length === 0 ? <p>No history yet.</p> : (
        <ul className="history-list">
          {history.map((city, index) => (
            <li key={index}>
              {city} <button className="delete-btn" onClick={() => deleteEntry(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchHistory;
