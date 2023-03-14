import "./createListing.css";
import React, { useState } from "react";
import { ApiClient, RidePosting, RidepostingApi } from "../../api/src";

function CreateListing() {
  var defaultClient = new ApiClient("http://localhost:8000/");
  let apiClient = new RidepostingApi(defaultClient);
  var basicAuth = defaultClient.authentications["basicAuth"];
  basicAuth.username = "frontend";
  basicAuth.password = "rideshare";
  var callback = function (error, data, response) {
    if (error) {
      console.error(error);
      console.error(response);
    } else {
      console.log("API called successfully. Returned data: " + data, response);
    }
  };

  const [startingLocation, setStartingLocation] = useState("");
  const [endingLocation, setEndingLocation] = useState("");
  const [isDriving, setIsDriving] = useState(false);
  const [numSeats, setNumSeats] = useState(1);
  const [numBags, setNumBags] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let new_ride = new RidePosting(
      0,
      startingLocation,
      endingLocation,
      isDriving,
      numSeats,
      numBags,
      "temp creator"
    );
    apiClient.ridepostingCreate(new_ride, callback);
  };

  const handleStartingLocationChange = (event) => {
    setStartingLocation(event.target.value);
  };

  const handleEndingLocationChange = (event) => {
    setEndingLocation(event.target.value);
  };

  const handleIsDrivingChange = (event) => {
    setIsDriving(event.target.checked);
  };

  const handleNumSeatsChange = (event) => {
    setNumSeats(parseInt(event.target.value));
  };

  const handleNumBagsChange = (event) => {
    setNumBags(parseInt(event.target.value));
  };

  return (
    <div>
      <h2>Create Car Pool Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Starting Location:</label>
          <input
            type="text"
            value={startingLocation}
            onChange={handleStartingLocationChange}
          />
        </div>
        <div>
          <label>Ending Location:</label>
          <input
            type="text"
            value={endingLocation}
            onChange={handleEndingLocationChange}
          />
        </div>
        <div>
          <label>Offering to Drive:</label>
          <input
            type="checkbox"
            checked={isDriving}
            onChange={handleIsDrivingChange}
          />
        </div>
        <div>
          <label>Number of Seats:</label>
          <input
            type="number"
            min="1"
            max="6"
            value={numSeats}
            onChange={handleNumSeatsChange}
          />
        </div>
        <div>
          <label>Number of Bags:</label>
          <input
            type="number"
            min="0"
            max="10"
            value={numBags}
            onChange={handleNumBagsChange}
          />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}

export default CreateListing;
