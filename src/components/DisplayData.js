import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
const DisplayData = (props) => {
  const link = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  console.log(props.data.weather[0].icon);
  let x = (props.data.main.temp - 273.15) * 10;
  x = Math.round(x);
  x = x / 10;
  let y = (props.data.main.feels_like - 273.15) * 10;
  y = Math.round(y);

  y = y / 10;

  let date = new Date(props.data.dt_txt);
  let readableDate = date.toDateString();
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Card.Img variant="top" src={link} />

        <Card.Body>
          <Card.Title>
            {" "}
            {props.data.weather[0].main} <span>{x}°</span>
          </Card.Title>
          <Card.Title></Card.Title>
          <Card.Title></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.data.weather[0].description}</ListGroupItem>
          <ListGroupItem>{readableDate}</ListGroupItem>
          <ListGroupItem>Temperature: {x}°</ListGroupItem>
          <ListGroupItem>Feels like : {y}°</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default DisplayData;
