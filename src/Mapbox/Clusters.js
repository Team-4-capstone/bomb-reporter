import {Layer} from "react-map-gl";


export const Clusters = () => {

    const parkLayer = {
        id: 'landuse_park',
        type: 'fill',
        source: 'mapbox',
        'source-layer': 'landuse',
        filter: ['==', 'class', 'park'],
        paint: {
            'fill-color': '#4E3FC8'
        }
    };


    return <Layer {...parkLayer} />


}