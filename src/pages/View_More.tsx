import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import Search from "../components/Search";

import logo from "../assets/download.png";
import pic from "../assets/CMT09563.jpg";

interface Event {
  name: string;
  location: string;
  registrationLink: string;
}

function View_More() {
  const [usapl, setUsapl] = useState<Event[]>([]);

  const [searchTermUsapl, setSearchTermUsapl] = useState("");
  const [filteredUsaplEvents, setFilteredUsaplEvents] = useState(usapl);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/usapl")
      .then((response) => response.json())
      .then((data) => {
        setUsapl(data);
        setFilteredUsaplEvents(data);
      })
      .catch((error) => console.error("Error fetching USAPL events:", error));
  }, []);

  const handleSearchUsapl = (e: React.ChangeEvent<any>) => {
    const value = e.target.value.toLowerCase();
    setSearchTermUsapl(value);

    const filtered = usapl.filter(
      (event) =>
        event.name.toLowerCase().includes(value) ||
        event.location.toLowerCase().includes(value)
    );
    setFilteredUsaplEvents(filtered);
  };

  return (
    <>
      <div className="short-banner">
        <img src={pic} alt="" />
        <h1 className="overlay-text real-big">Races</h1>
      </div>
      <div className="events">
        <div className="event-section-top">
          <h1>USAPL</h1>
          <Search
            searchTerm={searchTermUsapl}
            handleSearch={handleSearchUsapl}
          />
        </div>
        <div className="custom-card-group">
          {filteredUsaplEvents.map((event, index) => (
            <TestCard
              key={index}
              eventName={event.name}
              location={event.location}
              pic={logo}
              registrationLink={event.registrationLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default View_More;
