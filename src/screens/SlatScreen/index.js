import React, { useState, useEffect } from "react";
import "./salatScreen.css";
import SalatInfo from "./components/SalatInfo";
import axios from "axios";

function Salat() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const endpoint = "http://www.islamicfinder.us/index.php/api/prayer_times";
    const country = "DZ";
    const zipCode = "16000";
    try {
      const response = await axios.get(
        `${endpoint}?country=${country}&zipcode=${zipCode}&time_format=0`
      );
      setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <SalatInfo data={data} />
    </div>
  );
}

export default Salat;
