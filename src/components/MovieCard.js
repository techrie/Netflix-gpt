import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <div className="w-48 pr-1">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    </div>
  );
};

export default MovieCard;
