import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 md:px-6">
      <h1 className="pl-6 text-md md:text-lg text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex pl-6">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

/*
<div class="grid grid-cols-2 gap-4 auto-rows-max">{ITEMS}</div>
Item markup:

<div class="rounded-md overflow-hidden ring-1 ring-blue-600 ring-opacity-20">
  <div class="bg-red-200 p-6 flex flex-col justify-between ">{BODY}</div>
</div>*/
