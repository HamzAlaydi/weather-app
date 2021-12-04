import React from "react";
import { useState } from "react";
import FetchDataFromAPI from "./FetchDataFromAPI";
import { Container } from "react-bootstrap";
const Form = () => {
  // const [city, setCity] = useRecoilState(cityState);
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");

  function handleNameChange(e) {
    setTemp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // stops default reloading behaviour
    setCity(temp);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={handleNameChange}
          style={{ marginLeft: " 500px", marginTop: "40px" }}
        />
        <button value={temp} className="btn btn-primry">
          Submit
        </button>
      </form>
      <Container>
        <h2> You Choose : {city} City </h2>
      </Container>
      <FetchDataFromAPI cityName={city} />
    </>
  );
};

export default Form;
