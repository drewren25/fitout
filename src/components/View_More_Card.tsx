import { Fragment } from "react";

function View_More_Card() {
  return (
    <>
      <div className="card">
        <div className="card-body view-more">
          <a href="/All_Meets">
            <h1>View More</h1>
          </a>
          <a href="/All_Meets">
            <i className="bi bi-arrow-right-short fs-1"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default View_More_Card;
