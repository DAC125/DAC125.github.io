import React from "react";
import Card from "react-bootstrap/Card";

const CardProject = (props) => {

//     const handleClick = () => {
//         location.href = "https://www.google.com/"
//     }
// }
  return (
    <Card style={{ width: "30%", margin: "20px" }}>
      <Card.Img
        style={{ width: "286px", height: "180px", borderRadius: "10px"}}
        variant="top"
        src={props.img}
      />
      <Card.Body>
        <Card.Title style={{ color: "white", fontSize: "30px", fontWeight: "bold"}}>{props.title}</Card.Title>
        <Card.Text style={{margin: "10px"}}>{props.text}</Card.Text>
    
        <a href={props.projectRepo} className="colorButton">Go to project</a>
      </Card.Body>
    </Card>
  );
};

export default CardProject;
