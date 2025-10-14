import IButton from "./IButton";

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/auth"; // redirige al login
  };

  return (
    <header className="bg-[#043150] text-white flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">TECHNOVA</h1>
      <IButton text="Logout" onClick={handleLogout} color="secondary" />
    </header>
  );
};

export default Header;
