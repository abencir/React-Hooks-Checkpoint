function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

 
    const displayRating = typeof rating === 'number' ? Math.min(10, Math.max(0, rating)).toFixed(1) : 'N/A';


  const defaultPoster = `https://placehold.co/300x450/000000/FFFFFF?text=${encodeURIComponent(title || 'Movie')}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
      <img
        src={posterURL}
        alt={`${title} Poster`}
        className="w-full h-72 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = defaultPoster; }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-4">{description}</p>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
          <span className="text-gray-700 font-medium">Rating:</span>
          <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">{displayRating}/10</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;