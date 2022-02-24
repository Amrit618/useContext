import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export const GooglePlaces = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
  };
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude:{coordinates.lat}</p>
            <p>Longitude:{coordinates.lng}</p>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
              })}
            />
            {loading && <div>Loading...</div>}

            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };

              return (
                <div
                  key={index}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    // style,
                  })}
                  style={{
                    padding: 5,
                    background: suggestion.active ? "#fafafa" : "#ffff",
                  }}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
