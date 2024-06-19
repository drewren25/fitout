import React from 'react';

interface TestInfo {
    event: string;
}

const TestCard: React.FC<TestInfo> = ({ event }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{event}</h5>
      </div>
    </div>
  );
};

export default TestCard;
