import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

export default function SearchBar({ setGeoLocalization }) {
  const [input, setInput] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  console.log(API_KEY);

  const searchGeoLocalization = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.get(
        API_URL + `?q=${input}&limit=1&appid=${API_KEY}`
      );

      setGeoLocalization(result.data);
      console.log(result.data);
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
