import React, { useEffect, useState } from "react";

import TestCard from "../components/TestCard";
import Banner from "../components/Banner";
import Search from "../components/Search";

import View_More_Card from "../components/View_More_Card";
import View_More_Card_Races from "../components/View_More_Card_Races";

import logo from "../assets/download.png";
import logo2 from "../assets/gettyimages-1143071628.webp";

interface Event {
  name: string;
  location: string;
  registrationLink: string;
}

function Home() {
  const [marathons, setMarathons] = useState<Event[]>([]);
  const [usapl, setUsapl] = useState<Event[]>([]);

  const [searchTermUsapl, setSearchTermUsapl] = useState("");
  const [filteredUsaplEvents, setFilteredUsaplEvents] = useState(usapl);

  const [searchTermMarathons, setSearchTermMarathons] = useState("");
  const [filteredMarathonsEvents, setFilteredMarathonsEvents] =
    useState(marathons);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/usapl")
      .then((response) => response.json())
      .then((data) => {
        setUsapl(data);
        setFilteredUsaplEvents(data);
      })
      .catch((error) => console.error("Error fetching USAPL events:", error));

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
      <Banner />
      <div className="events">
        <div className="event-section-top">
          <h1>USAPL</h1>
          <Search
            searchTerm={searchTermUsapl}
            handleSearch={handleSearchUsapl}
          />
        </div>
        <div className="custom-card-group">
          {filteredUsaplEvents.slice(0, 9).map((event, index) => (
            <TestCard
              key={index}
              eventName={event.name}
              location={event.location}
              pic={logo}
              registrationLink={event.registrationLink}
            />
          ))}
          <View_More_Card />
        </div>
        <div className="event-section-top">
          <h1>Races</h1>
          <Search
            searchTerm={searchTermMarathons}
            handleSearch={handleSearchMarathons}
          />
        </div>
        <div className="custom-card-group">
          {filteredMarathonsEvents.slice(0, 9).map((marathon, index) => (
            <TestCard
              key={index}
              eventName={marathon.name}
              location={marathon.location}
              pic={logo2}
              registrationLink="https://findmymarathon.com/calendar-all.php"
            />
          ))}
          <View_More_Card_Races />
        </div>
      </div>
    </>
  );
}

export default Home;
