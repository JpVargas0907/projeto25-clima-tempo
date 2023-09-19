import { useState } from "react";
import ClimateResume from "../components/ClimateResume";
import GraphicResume from "../components/GraphicResume";
import SearchBar from "../components/SearchBar";
import { DashContainer } from "../style/style";

export default function Dashboard() {
  const [geoLocalizaton, setGeoLocalization] = useState([]);
  console.log(geoLocalizaton);

  return (
    <DashContainer>
      <SearchBar setGeoLocalization={setGeoLocalization} />
      <ClimateResume />
      <GraphicResume />
    </DashContainer>
  );
}
