
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDescriptionAndTrailer from './components/MovieDescriptionAndTrailer'; // Import the new component

function App() {
  const [movies, setMovies] = useState([
    // Initial movie data with trailerLink
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzYy00ZGNiLzkwMGMtZGVhYjM1ZTM0MWMyXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg",
      rating: 9.3,
      trailerLink: "https://www.youtube.com/embed/P6jD9t_vXQ8" // Example embed URL
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/embed/EXe4t_wH2bY"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/I/91obuW10FjL._AC_UF894,1000_QL80_.jpg",
      rating: 8.6,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://m.media-amazon.com/images/I/71c05l-x+vL._AC_UF894,1000_QL80_.jpg",
      rating: 8.9,
      trailerLink: "https://www.youtube.com/embed/s75_D-y5i4A"
    },
    {
        id: 5,
        title: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        rating: 8.8,
        trailerLink: "https://www.youtube.com/embed/bTgxVbXp6lM"
    },
  ]);

  // State to store filter criteria
  const [filter, setFilter] = useState({
    title: '',
    rating: ''
  });

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Function to update filter criteria
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesRating = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    return matchesTitle && matchesRating;
  });

  // Optional: useEffect to demonstrate usage, e.g., for logging filtered movies
  useEffect(() => {
    console.log("Filtered movies updated. Count:", filteredMovies.length);
  }, [filteredMovies]); // Runs whenever filteredMovies array changes

  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight leading-tight">
            My Movie App
          </h1>
          <p className="text-xl text-blue-600 mt-2">Discover and manage your favorite films!</p>
        </header>

        <main className="max-w-6xl mx-auto">
          <Routes> {/* Define your routes here */}
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Filter onFilterChange={handleFilterChange} />
                <AddMovieForm onAddMovie={handleAddMovie} />
                <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Movies List</h2>
                <MovieList movies={filteredMovies} />
              </>
            } />

            {/* Movie Description and Trailer Page Route */}
            {/* The :id is a URL parameter that will match the movie's ID */}
            <Route path="/movie/:id" element={<MovieDescriptionAndTrailer movies={movies} />} />
          </Routes>
        </main>

        <footer className="text-center text-gray-600 mt-12 text-sm">
          <p>&copy; 2024 My Movie App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;