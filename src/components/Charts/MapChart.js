import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import redPin from "assets/img/redPin.png";

class CoffeeShopMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      center: this.props.center || [31.9544,  35.9106]
    };
  }
  

  componentDidMount() {
    this.setState({
      chartData: this.props.coffeeShopsData,
    });
  }

  render() {
      const redPinIcon = L.icon({
        iconUrl: redPin,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],  
      });

    return (
        
        <MapContainer center={this.state.center} zoom={12} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"  />
        {this.state.chartData.map((shop, index) => (
          <Marker key={index} position={[shop.lat, shop.lng]}  icon={redPinIcon}>
            <Popup>
              <strong>{shop.name}</strong>
              <br />
              {shop.address}
              <br />
              {shop.revenue}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}

export default CoffeeShopMap;