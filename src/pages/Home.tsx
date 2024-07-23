import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import TestCard from "../components/TestCard";
import Banner from "../components/Banner";
import Search from "../components/Search";

import View_More_Card from "../components/View_More_Card";
import View_More_Card_Races from "../components/View_More_Card_Races";

interface EventInfo {
  title: string;
  date: string;
  time: string;
  location: string;
  id: number;
}

function Home() {
  let testData = [
    {
      title: "Card 1",
      date: "Saturday, 5/4/24",
      time: "12:00pm",
      location: "San Jose",
      id: 1,
    },
    {
      title: "Card 2",
      date: "Saturday, 5/11/24",
      time: "8:00pm",
      location: "San Francisco",
      id: 2,
    },
    {
      title: "Card 3",
      date: "Saturday, 5/18/24",
      time: "7:00am",
      location: "California",
      id: 3,
    },
    {
      title: "Card 4",
      date: "Saturday, 5/25/24",
      time: "6:00am",
      location: "Las Vegas",
      id: 4,
    },
    {
      title: "Card 5",
      date: "Saturday, 11/23/24",
      time: "6:00am",
      location: "Richmond",
      id: 5,
    },
  ];

  const [meets, setMeets] = useState([]);
  const [marathons, setMarathons] = useState([]);
  const [usapl, setUsapl] = useState([]);

  useEffect(() => {
    //dynamic data liftingcast

    fetch("http://127.0.0.1:5002/meets")
      .then((response) => response.json())
      .then((data) => setMeets(data))
      .catch((error) => console.error("Error fetching events:", error));

    //dynamic data marathons

    fetch("http://127.0.0.1:5001/marathons")
      .then((response) => response.json())
      .then((data) => setMarathons(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  //dynamic data usapl

  fetch("http://127.0.0.1:3001/usapl")
    .then((response) => response.json())
    .then((data) => setUsapl(data))
    .catch((error) => console.error("Error fetching events:", error));

  //search function

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(testData);

  const handleSearch = (e: React.ChangeEvent<any>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = testData.filter(
      (event) =>
        event.title.toLowerCase().includes(value) ||
        event.date.toLowerCase().includes(value) ||
        event.location.toLowerCase().includes(value) ||
        event.time.toString().includes(value)
    );
    setFilteredEvents(filtered);
  };

  //Home page render

  return (
    <>
      <Banner />
      <div className="events">
        <div className="event-section-top">
          <h1>Meets</h1>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>
        <div className="custom-card-group">
          {/*
          {filteredEvents.map((data) => (
            <Card
              title={data.title}
              date={data.date}
              time={data.time}
              location={data.location}
              id={data.id}
              key={data.id}
            />
          ))}
          */}
          {meets.slice(0, 9).map((meet, index) => (
            <TestCard key={index} eventName={meet} />
          ))}
          <View_More_Card />
        </div>
        <div className="event-section-top">
          <h1>Races</h1>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>
        <div className="custom-card-group">
          {marathons.slice(0, 9).map((marathon, index) => (
            <TestCard key={index} eventName={marathon} />
          ))}
          <View_More_Card_Races />
        </div>
        <div className="event-section-top">
          <h1>USAPL</h1>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>
        <div className="custom-card-group">
          {usapl.slice(0, 9).map((event, index) => (
            <TestCard key={index} eventName={event} />
          ))}
          <View_More_Card />
        </div>
      </div>
    </>
  );
}

export default Home;
