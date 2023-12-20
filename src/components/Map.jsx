import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <h2>
        Position: {lat} , {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParams({
            lat: 32,
            lng: 60,
          });
        }}
      >
        Change Position
      </button>
    </div>
  );
}
