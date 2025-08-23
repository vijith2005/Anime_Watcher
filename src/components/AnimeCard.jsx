import { Link } from 'react-router-dom';

function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.mal_id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{anime.title}</h3>
          <p className="text-sm text-gray-400">{anime.type} • {anime.year || 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;