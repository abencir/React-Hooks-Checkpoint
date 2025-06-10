import { useParams, useNavigate } from 'react-router-dom';

function MovieDescriptionAndTrailer({ movies }) {
  const { id } = useParams(); 
  const navigate = useNavigate(); 


  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-lg mx-auto mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Movie Not Found!</h2>
        <p className="text-gray-700 mb-6">The movie you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')} // Navigate back to home
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Render movie details
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')} // Navigate back to home
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mb-6 transition duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{movie.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Movie Poster */}
        <div className="md:col-span-1">
          <img src={movie.posterURL} alt={`${movie.title} Poster`} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Description and Trailer */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Description:</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{movie.description}</p>

          {/* Conditional rendering for trailer if link exists */}
          {movie.trailerLink && (
            <>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Trailer:</h3>
              {/* Responsive embed for YouTube videos */}
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src={movie.trailerLink}
                  title={`${movie.title} Trailer`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDescriptionAndTrailer;