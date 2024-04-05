import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, SUGGESTED_LANGUAGES } from "../utils/constants";
import { clearGPTResults, toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
        
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleButtonSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGPTSearchView());
    dispatch(clearGPTResults());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center justify-between">
          {showGPTSearch && (
            <select
              className="px-2 py-1 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUGGESTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 py-1 mx-4 my-2 bg-purple-800 font-normal text-white rounded-lg"
            onClick={handleButtonSearch}
          >
            {showGPTSearch ? "HomePage" : "GPTSearch"}
          </button>
          <img
            className="hidden md:block w-8 h-8"
            src={user?.photoURL}
            alt="avatar_logo"
          />
          <button
            className="font-normal text-white cursor-pointer "
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
