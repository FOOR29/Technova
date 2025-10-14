// import IButton from "./IButton";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/auth"; // redirige al login
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-extrabold tracking-wide text-[#043150]">
        TECH<span className="text-[#25A2D8]">NOVA</span>
      </h1>

      <button
        onClick={handleLogout}
        className="bg-[#25A2D8] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#1b8cbc] transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
