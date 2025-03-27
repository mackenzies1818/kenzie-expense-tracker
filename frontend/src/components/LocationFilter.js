import React from 'react';

const LocationFilter = ({ locationFilter, setLocationFilter, locations }) => (
  <div className="mb-4 text-xs pl-1 pb-5">
    <label htmlFor="location-filter" className="mr-2">Filter by Location:</label>
    <select
      id="location-filter"
      value={locationFilter}
      onChange={(e) => setLocationFilter(e.target.value)}
      className="p-1 border rounded"
    >
      <option value="">All Locations</option>
      {locations.map((location, index) => (
        <option key={index} value={location}>{location}</option>
      ))}
    </select>
  </div>
);

export default LocationFilter;
