import { useState } from "react";
import ClimateResume from "../components/ClimateResume";
import GraphicResume from "../components/GraphicResume";
import SearchBar from "../components/SearchBar";
import { DashContainer } from "../style/style";

export default function Dashboard() {
  const [geoLocalizaton, setGeoLocalization] = useState([]);
  const { lon, lat, name } = geoLocalizaton;
  const [searchState, setSearchState] = useState(false);

  return (
    <DashContainer>
      <SearchBar
        setGeoLocalization={setGeoLocalization}
        setSearchState={setSearchState}
      />
      <ClimateResume
        name={name}
        lat={lat}
        lon={lon}
        searchState={searchState}
      />
      <GraphicResume />
    </DashContainer>
  );
}
