import { useRef, useEffect } from "react";
import leaflet from "leaflet";

export default function Map() {
    const mapContainerRef = useRef(null); //Ref for map container
    const mapInstanceRef = useRef(null);  //Ref for map instance

    //useEffect to initialize and render map
    useEffect(() => {
        if (mapInstanceRef.current) {
            //to amnage map recreation
            return;
        }

        //Map initialization
        mapInstanceRef.current = leaflet.map(mapContainerRef.current).setView([67.8558, 20.2253], 13);

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapInstanceRef.current);

    }, []);

    //useEffect to cleanup map instance
    /*
    useEffect(() => {
        return () => {
            mapInstanceRef.current.remove();
        };
    }, []);
    */

    //useEffect to place a marker on map

    return <div id="map" ref={mapContainerRef} style={{ height: "50%", width: "50%" }}></div>;
}
