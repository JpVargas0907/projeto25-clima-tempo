import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function SearchBar({ setGeoLocalization, setSearchState }) {
  const [input, setInput] = useState("");
  const API_KEY = "0cd0669390d2610bbed832494448330e";
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";

  const searchGeoLocalization = async (event) => {
    event.preventDefault();
    setSearchState(true);

    try {
      const result = await axios.get(
        API_URL + `?q=${input}&limit=1&appid=${API_KEY}`
      );

      setGeoLocalization(result.data);
      setSearchState(false);
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-container mb-3">
      <form onSubmit={searchGeoLocalization} action="/action_page.php">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search.."
          name="search"
          value={input}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
