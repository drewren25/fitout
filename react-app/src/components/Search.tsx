import * as React from "react";

interface searchQuery {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<any>) => void;
}

const Search: React.FC<searchQuery> = ({ searchTerm, handleSearch }) => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Search;
