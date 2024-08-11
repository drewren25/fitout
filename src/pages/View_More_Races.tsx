import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import Search from "../components/Search";

import logo2 from "../assets/gettyimages-1143071628.webp";
import pic from "../assets/youre-a-runner.webp";

interface Event {
  name: string;
  location: string;
  registrationLink: string;
}

function View_More_Races() {
  const [marathons, setMarathons] = useState<Event[]>([]);

  const [searchTermMarathons, setSearchTermMarathons] = useState("");
  const [filteredMarathonsEvents, setFilteredMarathonsEvents] =
    useState(marathons);

  useEffect(() => {
    fetch("http://127.0.0.1:3002/marathons")
      .then((response) => response.json())
      .then((data) => {
        setMarathons(data);
        setFilteredMarathonsEvents(data);
      })
      .catch((error) =>
        console.error("Error fetching marathon events:", error)
      );
  }, []);

  const handleSearchMarathons = (e: React.ChangeEvent<any>) => {
    const value = e.target.value.toLowerCase();
    setSearchTermMarathons(value);

    const filtered = marathons.filter(
      (event) =>
        event.name.toLowerCase().includes(value) ||
        event.location.toLowerCase().includes(value)
    );
    setFilteredMarathonsEvents(filtered);
  };

  return (
    <>
      <div className="short-banner">
        <img src={pic} alt="" />
        <h1 className="overlay-text real-big">Races</h1>
      </div>
      <div className="events">
        <div className="event-section-top">
          <h1>Races</h1>
          <Search
            searchTerm={searchTermMarathons}
            handleSearch={handleSearchMarathons}
          />
        </div>
        <div className="custom-card-group">
          {filteredMarathonsEvents.map((marathon, index) => (
            <TestCard
              key={index}
              eventName={marathon.name}
              location={marathon.location}
              pic={logo2}
              registrationLink="https://findmymarathon.com/calendar-all.php"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default View_More_Races;
