import { Fragment } from "react";
import logo from "../assets/download.png";

import * as React from "react";

interface EventInfo {
  title: string;
  date: string;
  time: string;
  location: string;
  id: number;
}

const Card: React.FC<EventInfo> = ({ title, date, time, location, id }) => {
  return (
    <div className="card">
      <img src={logo} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text light">
          {date} @{time}
        </p>
        <p className="card-text">
          <i className="bi bi-currency-dollar"></i>100 |{" "}
          <i className="bi bi-geo-alt"></i>
          {location}
        </p>
        <div className="button-group">
          <a href="#" className="btn btn-outline-primary">
            Contact
          </a>
          <a href="#" className="btn btn-primary">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
