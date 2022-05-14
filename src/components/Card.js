import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

const Card = ({ taskObj, index }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ "backgroundColor": colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            "backgroundColor": colors[index % 5].secondaryColor,
            "borderRadius": "0.6rem",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "1.25rem", bottom: "1.25rem" }}>
          <i
            className="fa fa-edit"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer", marginRight: "0.5rem" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fa fa-trash"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export { Card };
