// import IButton from "./IButton";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/auth"; // redirige al login
  };

  return (
    <header className="bg-gradient-to-r from-[#043150] to-[#25A2D8] shadow-lg flex justify-between items-center px-8 py-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#F1EEEE] rounded-lg flex items-center justify-center">
          <span className="text-[#043150] font-bold text-xl">T</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-wider text-[#F1EEEE]">
          TECHNOVA
        </h1>
      </div>

      <button
        onClick={handleLogout}
        className="bg-[#F1EEEE] text-[#043150] font-medium px-6 py-2.5 rounded-lg hover:bg-[#CBC6C6] transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;