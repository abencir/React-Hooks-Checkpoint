import React from 'react';
function Filter({ onFilterChange }) {
  // Internal state for input fields
  const [titleFilter, setTitleFilter] = React.useState('');
  const [ratingFilter, setRatingFilter] = React.useState('');

  // Handle title input change
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitleFilter(newTitle);
    // Pass filter values up to parent immediately
    onFilterChange({ title: newTitle, rating: ratingFilter });
  };

  // Handle rating input change
  const handleRatingChange = (e) => {
    const newRating = e.target.value;
    setRatingFilter(newRating);
    // Pass filter values up to parent immediately
    onFilterChange({ title: titleFilter, rating: newRating });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="titleFilter" className="block text-gray-700 text-sm font-bold mb-2">
            Filter by Title:
          </label>
          <input
            type="text"
            id="titleFilter"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter movie title"
            value={titleFilter}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="ratingFilter" className="block text-gray-700 text-sm font-bold mb-2">
            Filter by Minimum Rating:
          </label>
          <input
            type="number"
            id="ratingFilter"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., 7.5 (out of 10)"
            min="0"
            max="10"
            step="0.1"
            value={ratingFilter}
            onChange={handleRatingChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;