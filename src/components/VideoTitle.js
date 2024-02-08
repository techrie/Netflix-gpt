const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-3/6">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black px-2 md:px-6 py-0 md:py-2 text-lg  rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white px-4 py-2 ml-2 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
