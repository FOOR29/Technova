const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#043150] text-white text-center px-4">
      <div className="bg-[#25A2D8] rounded-2xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-8xl font-extrabold text-white drop-shadow-lg">404</h2>
        <span className="block mt-4 text-2xl font-semibold text-white">
          Oops! Page Not Found
        </span>
        <p className="mt-2 text-white/80 text-sm">
          It seems like you got lost on your way 
        </p>
        <a
          href="/"
          className="inline-block mt-6 bg-white text-[#043150] font-semibold py-2 px-6 rounded-full hover:bg-[#25A2D8] hover:text-white transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
