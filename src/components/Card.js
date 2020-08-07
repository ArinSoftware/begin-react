import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <p className="card-text"><small className="text-muted">{props.updatedTime}</small></p>
            </div>
          </div>
    );
};

export default Card;

