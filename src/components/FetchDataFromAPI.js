import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cityState, weatherState } from "../recoil/atom/cityAtom";
import { Col, Row, Container } from "react-bootstrap";
import CardDay from "./cardDay";

const key = "478f1611be4e3a210abc53f2b1c9e8d4";
const FetchDataFromAPI = (props) => {
  const [data, setData] = useState([]);
  const [weather, setWeather] = useRecoilState(weatherState);
  const [city, setCity] = useRecoilState(cityState);
  const link = `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=${key}`;

  ////////////////////Fetch Data

  const sendReq = async (_) => {
    const weatherData = await axios.get(link);
    // console.log(weatherData);
    setWeather(weatherData);
    console.log(weather, "fetch");
  };

  const fetchData = async (_) => {
    if (typeof props.cityName == "undefined" || props.cityName == "") {
      console.log("Must Enter City Name");
    } else {
      sendReq();
    }
  };

  //1637971200  1637982000  1637992800 // 1638003600  1638014400  1638025200

  useEffect(() => {
    fetchData();
    console.log();
  }, [props.cityName]);
  return (
    <>
      <CardDay />
    </>
  );
};

export default FetchDataFromAPI;
