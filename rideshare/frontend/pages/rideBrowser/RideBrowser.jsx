import "./rideBrowser.css";
import { ListingTile } from "../../components";
import React, { useState, useEffect } from "react";
import { ApiClient, RidePosting, RidepostingApi } from "../../api/src";

function RideBrowser() {
  var defaultClient = new ApiClient("http://localhost:8000/");
  let apiClient = new RidepostingApi(defaultClient);
  var basicAuth = defaultClient.authentications["basicAuth"];
  basicAuth.username = "frontend";
  basicAuth.password = "rideshare";
  const [listings, setListings] = useState(null);

  useEffect(() => {
    let rideList = [];
    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
        console.error(response);
      } else {
        // Succesful API call
        rideList = data;
        setListings(rideList);
      }
    };
    apiClient.ridepostingList(callback);
  }, []);

  if (!Array.isArray(listings)) {
    return <div>No listings found</div>;
  }

  return (
    <div className="ride-listings-container">
      <h2>Ride Listings</h2>
      <div className="ride-listings-grid">
        {listings.map((listing) => (
          <ListingTile key={listing.order_id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default RideBrowser;
