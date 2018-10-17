import React from "react";
import "./PuppyCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removePuppy(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default PuppyCard;
