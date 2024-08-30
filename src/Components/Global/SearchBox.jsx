import React, { useState } from 'react';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleSearch = () => {
    // Handle the search functionality here
    console.log('Search Query:', searchQuery);
    console.log('Dropdown 1:', dropdown1Value);
    console.log('Dropdown 2:', dropdown2Value);
  };

  return (
    <div className="flex justify-center">
    
    <div className="flex items-center w-2/3 space-x-4 p-4 bg-gray-100 rounded-lg">
      {/* Dropdown 1 */}
      <select
        value={dropdown1Value}
        onChange={(e) => setDropdown1Value(e.target.value)}
        className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Skill</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Dropdown 2 */}
      <select
        value={dropdown2Value}
        onChange={(e) => setDropdown2Value(e.target.value)}
        className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select District        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
    </div>
  );
};

export default SearchBox;
