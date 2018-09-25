import React from "react";
let googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyBr5s9s84rqWoL51q0Om7rPNWsxMa7l21k",
  Promise: Promise
});

class Map extends React.Component {
  render() {
    return (
      <div>
        {this.props.locations.map(loc => {
          googleMapsClient.geoCode({ address: loc.location });
        })}
      </div>
    );
  }
}
export default Map;
