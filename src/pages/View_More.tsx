import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import Card from "../components/Card";
import pic from "../assets/CMT09563.jpg";
import Search from "../components/Search";

type Meet = {
  title: string;
};

function View_More() {
  //dynamic data

  const [meets, setMeets] = useState<Meet[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Meet[]>(meets);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch("http://127.0.0.1:5002/meets")
      .then((response) => response.json())
      .then((data) => {
        setMeets(data);
        setFilteredEvents(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching events:", error));
    setLoading(false);
  }, []);

  const handleSearch = (e: React.ChangeEvent<any>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = meets.filter((event) =>
      event.toLowerCase().includes(value)
    );
    setFilteredEvents(filtered);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div>
      <div className="short-banner">
        <img src={pic} alt="" />
        <h1 className="overlay-text real-big">Meets</h1>
      </div>
      <div className="events">
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="custom-card-group">
          {filteredEvents.map((meet, index) => {
            console.log("Current Meet:", meet);
            console.log("Meet Type:", typeof meet);
            return <TestCard key={index} eventName={meet} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default View_More;
