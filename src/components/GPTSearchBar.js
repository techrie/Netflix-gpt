import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
// import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );

    const json = await data.json();
    return json.results; //Returns a promise
  };

  const handleGPTSearchClick = async () => {
    //Make an API call to GPT API and get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices)
    //Todo error page

    // console.log(gptResults?.choices?.[0]?.message?.content);
    // const gptMovies1 = gptResults?.choices?.[0]?.message?.content.split(",");

    const gptMovies = [
      "Andaz Apna Apna",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
      "Chalti Ka Naam Gaadi",
    ];

    //For each movie , search TMDB API
    const promiseArray = gptMovies.map((movieName) =>
      searchMovieTMDB(movieName)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
