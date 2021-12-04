import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { weatherState } from "../recoil/atom/cityAtom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";

import DisplayData from "./DisplayData";
const CardDay = (props) => {
  const [weather, setWeather] = useRecoilState(weatherState);
  let fiveDays = [];
  // useEffect(() => {
  //   if (weather == "recoil" || typeof weather == undefined) {
  //     console.log("City Nane  not loaded yet ");
  //   } else {
  //     let iterator = weather.data.list;

  //     for (let i = 0; i < iterator.length; i += 8) {
  //       fiveDays.push(iterator[i].weather[0]);
  //     }
  //   }
  //   console.log(fiveDays.length, "inside the useEffect");
  // }, [weather]);
  // =>  inside useEffect read array length in 5 && outside read array length in 0

  if (weather == "recoil" || typeof weather == undefined) {
    console.log("City Nane  not loaded yet ");
  } else {
    let iterator = weather.data.list;

    for (let i = 0; i < iterator.length; i += 8) {
      fiveDays.push(iterator[i]);
    }
  }

  console.log(fiveDays, "inside the useEffect");
  return (
    <Container>
      <Row>
        {fiveDays.map((data) => (
          <Col key={Math.random()}>
            <DisplayData data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardDay;
