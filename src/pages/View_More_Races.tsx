import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import pic from "../assets/CMT09563.jpg";
import Search from "../components/Search";

type Meet = {
  title: string;
};

function View_More() {
  // Dynamic data states
  const [meets, setMeets] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/marathons")
      .then((response) => response.json())
      .then((data: string[]) => {
        setMeets(data);
        setFilteredEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = meets.filter((event) =>
      event.toLowerCase().includes(value)
    );
    setFilteredEvents(filtered);
  };

  if (loading) {
    return <div className="loading real-big">Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <div className="short-banner">
        <img src={pic} alt="" />
        <h1 className="overlay-text real-big">Races</h1>
      </div>
      <div className="events">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="custom-card-group">
          {filteredEvents.map((meet, index) => {
            return <TestCard key={index} eventName={meet} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default View_More;
