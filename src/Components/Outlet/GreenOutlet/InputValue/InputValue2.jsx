import React, { useState } from "react";
import "./InputValue.css";

const InputValue2 = ({ initialCityData1 }) => {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCityClick = (city) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleDeleteBtn = (cityToDelete) => {
    const updatedSelectedCities = selectedCities.filter(
      (city) => city !== cityToDelete
    );
    setSelectedCities(updatedSelectedCities);
  };

  return (
    <>
      <div className="input_container1">
        {selectedCities.map((data) => (
          <div className="inputvalue_design1" key={data}>
            <span>{data}</span>
            <button className="" onClick={() => handleDeleteBtn(data)}>
              <svg
                className="MuiAutocomplete-tagIcon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11" fill="your-desired-color" />
                <path
                  d="M17.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7A1 1 0 105.7 7.12L10.59 12 5.7 16.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        ))}
        <div className="options bg-white p-3 rounded shadow">
          {initialCityData1.map((data, index) => (
            <p
              key={index}
              className="mb-2"
              onClick={() => handleCityClick(data)}
            >
              {data}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputValue2;
