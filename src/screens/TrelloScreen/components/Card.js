import React from "react";
const TAGS = {
  work: "#ff675f",
  study: "#63ffbb",
  hobby: "#833ad9",
};

const Card = (props) => {
  return (
    <div className="trello-card-container">
      <div
        className="trello-card-tag"
        style={{ backgroundColor: TAGS[props.tag] }}
      ></div>
      <div className="trello-card-title">{props.title}</div>
      <hr></hr>
      <div className="trello-card-description">{props.description}</div>
      <div className="trello-card-footer">
        <div className="trello-card-ddl">{props.ddl}</div>
        <div className="trello-card-actions">
          {props.section === "To Do" ? null : (
            <div
              className="action"
              onClick={() => {
                props.toPreviousStep(props.id);
              }}
            >
              Presvious
            </div>
          )}
          {props.section === "Completed" ? null : (
            <div
              className="action"
              onClick={() => {
                props.toNextStep(props.id);
              }}
            >
              Next
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
