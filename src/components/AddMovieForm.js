import { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
  // State for each input field in the form
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!title || !description || !posterURL || !rating) {
      alert('Please fill in all fields to add a movie!');
      return;
    }

    const newMovie = {
      id: Date.now(), // Simple unique ID for demonstration
      title,
      description,
      posterURL,
      rating: parseFloat(rating) // Convert rating to a number
    };

    onAddMovie(newMovie); // Pass the new movie object to the parent

    // Clear the form fields after submission
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Movie</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie Title"
            required
          />
        </div>
        <div>
          <label htmlFor="posterURL" className="block text-gray-700 text-sm font-bold mb-2">
            Poster URL:
          </label>
          <input
            type="url"
            id="posterURL"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            placeholder="https://example.com/poster.jpg"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-y"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of the movie..."
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
            Rating (0-10):
          </label>
          <input
            type="number"
            id="rating"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="e.g., 8.5"
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;