import ClimateResume from "../components/ClimateResume";
import GraphicResume from "../components/GraphicResume";
import SearchBar from "../components/SearchBar";
import { DashContainer } from "../style/style";

export default function Dashboard() {
  return (
    <DashContainer>
      <SearchBar />
      <ClimateResume />
      <GraphicResume />
    </DashContainer>
  );
}
