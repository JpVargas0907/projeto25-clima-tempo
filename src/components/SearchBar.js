import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div class="search-container">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
}
