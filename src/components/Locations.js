import React from "react";

class Locations extends React.Component {
  render() {
    return this.props.locations.map(location => (
      <li key={location.id}>{location.location}</li>
    ));
  }
}
export default Locations;
