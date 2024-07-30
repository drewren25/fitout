import React from "react";

interface eventData {
  eventName: string;
  location: string;
  pic: string;
}

const TestCard: React.FC<eventData> = ({ eventName, location, pic }) => {
  return (
    <div className="card">
      <img src={pic} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{eventName}</h5>
        <p>{location}</p>
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
