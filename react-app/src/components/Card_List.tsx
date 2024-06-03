import Card from "./Card";
import { Fragment } from "react";
import logo from "../assets/download.png";

import * as React from "react";

interface EventInfo {
    title: string;
    date: string;
    time: string;
    id: number;
  }

const CardList: React.FC<EventInfo> = ({ title, date, time, id }) => {
  return (
    <div className="CardList">
      <div className="card" style={{ width: "21rem" }}>
        <img src={logo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text light">{date} @{time}</p>
          <p className="card-text">
            <i className="bi bi-currency-dollar"></i>100 |{" "}
            <i className="bi bi-geo-alt"></i>Location
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
    </div>
  );
};

export default CardList;
