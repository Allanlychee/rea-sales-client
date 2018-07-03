import React, { Component } from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import API from "../Profile/Admin/Utils/adminAddSeller/API"
import axios from 'axios'


// var Arr = ["6295 W Crestline Ave denver, CO 80123", "8100 E Union Ave UNIT 204 denver, CO 80237", "701 S Jackson St denver, CO 80209", "512 N Washington st denver, CO 80203", "1895 Vine St #103 denver, CO 80206", "20120 e 46th pl Denver, Co 80249"]
var markers = []

// for (var i = 0; i < Arr.length; i++) {

//     Geocode.fromAddress(Arr[i]).then(
//         response => {
//             const { lat, lng } = response.results[0].geometry.location;
//             markers.push({ id: i += 1, lat: lat, lng: lng })
//         },
//         error => {
//             console.error(error);
//         }
//     );
// }


class Map extends Component {
    state = {
        homes: []
    };

    componentDidMount() {
        this.loadHomes()   
    }
    
    loadHomes = () => {
        API.getHomes()
        .then(res =>
            this.setState({ homes: res.data })
        )
        .catch(err => console.log(err));
    };
    
    render() {
        // Optionally the request above could also be done as
        axios.get('/api/admin/addHome')
            .then(function (response) {
    
                for (var i = 0; i < response.data.length; i++) {
    
                    Geocode.fromAddress(response.data[i].formatted_Addr).then(
                        response => {
                            const { lat, lng } = response.results[0].geometry.location;
                            markers.push({ id: i += 2, lat: lat, lng: lng })
                        },
                        error => {
                            console.error(error);
                        }
                    );
                    console.log(response.data[i].formatted_Addr)
                }   
                console.log(markers);
            })
            .catch(function (error) {
                console.log(error);
            });

        return (
            <div>
                <GoogleMap
                    defaultZoom={10.5}
                    defaultCenter={{ lat: 39.7168, lng: -104.9531 }}
                >
                    {markers.map(markers => (
                        <Marker
                            position={{ lat: markers.lat, lng: markers.lng }}
                            key={markers.id}
                        />
                    ))}
                </GoogleMap>
            </div>

        )
    }
}

const MyMapComponent = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBe4e-dSQ2ZNtQVt0rr2_E5z9amEQYquAA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `645px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(Map)

export default MyMapComponent