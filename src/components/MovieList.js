import MovieCard from './MovieCard'; // Import the MovieCard component

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-600 text-lg py-10">
        No movies found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        // Use movie.id or a stable unique key for better performance
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;