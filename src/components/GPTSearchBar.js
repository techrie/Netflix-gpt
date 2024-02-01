import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  console.log(lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="px-2 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
