import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css"

const CardProject = (props) => {
  //     const handleClick = () => {
  //         location.href = "https://www.google.com/"
  //     }
  // }
  return (
    <Card style={{ width: "30%", margin: "20px" }}>
      <Card.Img
        style={{ width: "286px", height: "180px", borderRadius: "10px" }}
        variant="top"
        src={props.img}
      />
      <Card.Body>
        <div className="card-title">
          {/* <Card.Title
            style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}
          >
            
          </Card.Title> */}
          <h5 style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>{props.title}</h5>
        </div>
        <Card.Text style={{ margin: "10px" }}>{props.text}</Card.Text>

        <a href={props.projectRepo} className="colorButton">
          Go to project
        </a>
      </Card.Body>
    </Card>
  );
};

export default CardProject;
