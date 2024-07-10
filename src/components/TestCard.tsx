import React from "react";
import logo from "../assets/download.png";

interface eventData {
  eventName: string;
}

const TestCard: React.FC<eventData> = ({ eventName }) => {
  return (

      <div className="card">
        <img src={logo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{eventName}</h5>
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

export default TestCard;
