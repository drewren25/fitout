import React, { useState } from "react";

import Card from "../components/Card";
import CardList from "../components/Card_List";
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
      time: "8:00m",
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
  ];

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
          <View_More_Card />
        </div>
      </div>
    </>
  );
}

export default Home;
