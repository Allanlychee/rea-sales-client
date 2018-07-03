import React, {Component} from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import API from "../Profile/Admin/Utils/adminAddSeller/API"


var Arr = ["6 Bottletree Irvine, CA 92618", "14561 Sweetan St. Irvine, CA 92604", "239 Tall Oak Irvine, CA 92603"]
var markers = []

for (var i = 0; i < Arr.length; i++) {

    Geocode.fromAddress(Arr[i]).then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            markers.push({ id: i+=1, lat: lat, lng: lng })
        },
        error => {
            console.error(error);
        }
    );
}

console.log(markers)


const MyMapComponent = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBe4e-dSQ2ZNtQVt0rr2_E5z9amEQYquAA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `645px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
    defaultZoom={11}
    defaultCenter={{lat: 33.6691659, lng: -117.7796891}}
    >
        {markers.map(markers => (
            <Marker
                position={{ lat: markers.lat, lng: markers.lng }}
                key={markers.id}
            />
        ))}
        {props.isMarkerShown}
    </GoogleMap>
))

export default MyMapComponent