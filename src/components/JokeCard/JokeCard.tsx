import React from 'react';

interface JokeCardProps {
  value: string;
}

const JokeCard: React.FC<JokeCardProps> = ({value}) => {
  return (
    <div className="card border-info mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-body">
        <p className="card-text">{value}</p>
      </div>
    </div>
  );
};

export default JokeCard;