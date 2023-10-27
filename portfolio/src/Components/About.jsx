import { debounce } from "lodash";
import { useState } from "react";

export const About = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = debounce((value) => {
    // Your search or any other operation here
    console.log("Searching for", value);
  }, 1000);

  const onInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleInputChange(value);
  };

  return (
    <div>
      <input
        placeholder="Input"
        type="text"
        value={searchTerm}
        onChange={onInputChange}
      />
    </div>
  );
};

