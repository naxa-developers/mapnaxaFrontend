import React, { Component } from 'react'
import L from 'leaflet';

class MainMap extends Component 
{
    componentDidMount()
    {
        this.map = L.map("mainMap", {
            // plugin code is assigned to Leaflet after import
            // so we can immediately use plugins features
            center: [41.390205, 2.154007],
            zoom: 14,
            layers: [
              L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                attribution:
                  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              })
            ]
        });
    }

    render() 
    {
        return (
            <div id="mainMap" style={{ position: 'absolute', top: '60px', left: '250px', width: '1200px', height: '90vh'}} />
        )
    }
}

export default MainMap
