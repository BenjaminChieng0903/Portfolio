import React from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const GoogleJavascriptMaps = () => {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY as string
  const position = { lat: -37.81521987915039, lng: 144.9383544921875 }
  return (
    <APIProvider
      apiKey={API_KEY}
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Map
        className="map"
        mapId="DEMO_MAP_ID"
        defaultZoom={13}
        defaultCenter={position}
        onCameraChanged={(ev) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom,
          )
        }
      >
        <Marker position={position}></Marker>
      </Map>
    </APIProvider>
  )
}

export default GoogleJavascriptMaps
