import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import TestCard from "../components/TestCard";
import Banner from "../components/Banner";
import View_More_Card from "../components/View_More_Card";
import Search from "../components/Search";

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

  //dynamic data

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

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
        <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="custom-card-group">
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
          <div className="custom-card-group">
            {events.map((event, index) => (
              <TestCard eventName={event} />
            ))}
            <View_More_Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
