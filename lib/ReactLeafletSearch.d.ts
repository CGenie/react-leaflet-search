import { Icon, LatLng, ZoomPanOptions } from "leaflet";
import React from "react";
import { SearchControlProps } from "./search-control";
type SearchInfo = {
    latLng: LatLng;
    info: string | Array<string>;
    raw: Record<string, unknown>;
};
export type ReactLeafletSearchProps = // MapControlProps &
SearchControlProps & {
    showMarker?: boolean;
    showPopup?: boolean;
    zoom: number;
    mapStateModifier?: "flyTo" | "setView" | ((l: LatLng) => void);
    zoomPanOptions?: ZoomPanOptions;
    customProvider?: {
        search: (value: string) => Promise<any>;
    };
    markerIcon?: Icon;
    popUp?: (i: {
        latLng: LatLng;
        info: string | Array<string>;
        raw: Object;
    }) => JSX.Element;
    children?: (info: SearchInfo) => JSX.Element | null;
    onChange?: (info: SearchInfo) => void;
};
declare function ReactLeafletSearch(props: ReactLeafletSearchProps): React.JSX.Element;
declare namespace ReactLeafletSearch {
    var defaultProps: {
        inputPlaceholder: string;
        showMarker: boolean;
        showPopup: boolean;
        zoom: number;
        closeResultsOnClick: boolean;
        openSearchOnLoad: boolean;
        search: undefined;
        provider: string;
        mapStateModifier: string;
        zoomPanOptions: {
            animate: boolean;
            duration: number;
            easeLinearity: number;
            noMoveStart: boolean;
        };
    };
}
export default ReactLeafletSearch;
