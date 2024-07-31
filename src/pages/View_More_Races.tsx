import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import pic from "../assets/CMT09563.jpg";
import Search from "../components/Search";

interface Event {
  name: string;
  location: string;
}

function View_More() {
  // Dynamic data states
  const [marathons, setMarathons] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/marathons")
      .then((response) => response.json())
      .then((data: Event[]) => {
        setMarathons(data);
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

    const filtered = marathons.filter((event) =>
      event.name.toLowerCase().includes(value)
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
          {filteredEvents.map((race, index) => {
            return (
              <TestCard
                key={index}
                eventName={race.name}
                location={race.location}
                pic={pic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default View_More;
