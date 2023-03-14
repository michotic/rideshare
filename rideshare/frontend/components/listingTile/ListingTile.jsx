import "./listingTile.css";
import React from "react";

function RideListingTile({ listing }) {
  return (
    <div className="ride-listing-tile">
      <div className="ride-listing-tile-preview">
        <div className="ride-listing-tile-date">
          {listing.date.toDateString()}
        </div>
        <div className="ride-listing-tile-locations">
          <h2>Pickup: </h2> {listing.point_a}
          <h2>Dropoff: </h2> {listing.point_b}
        </div>
      </div>
    </div>
  );
}

export default RideListingTile;
