import { useEffect, useState } from "react";
import aggregator from "../services/aggregator";

function LocationCard() {
  useEffect(() => {
    aggregator();
  }, []);

  return <div className="card">gello</div>;
}

export default LocationCard;
