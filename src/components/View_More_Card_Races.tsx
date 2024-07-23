import { Fragment } from "react";

//MARATHONS

function View_More_Card_Races() {
  return (
    <>
      <div className="card">
        <div className="card-body view-more">
          <a href="#/All_Races">
            <h1>View More</h1>
          </a>
          <a href="#/All_Races">
            <i className="bi bi-arrow-right-short fs-1"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default View_More_Card_Races;
