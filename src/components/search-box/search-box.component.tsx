import React, { FC } from "react";

type SearchBoxProps = {
  setSearchText: (val: string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ setSearchText }) => {
  return (
    <div className="SearchBox">
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
    </div>
  );
};

export default SearchBox;
