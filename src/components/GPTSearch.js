import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:w-screen object-cover md:object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
