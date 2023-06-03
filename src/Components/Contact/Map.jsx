import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 22.55551346622664,
      lng: 88.36940611978044,
    },
    zoom: 11,
  };
  return (
    <>
      <div   style={{ "height": "80vh", "width": "100%","zIndex":"-100" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
