import { FaBars } from "react-icons/fa";

function Navbar() {
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <header className="flex justify-between items-center px-10 py-4">
      {/* Left Section */}
      <div className="flex items-center space-x-10">
        <div className="flex items-center gap-2">
        <img
          src="/onelot.webp" 
          alt="OneLot Logo"
          className="h-20"
        />
        <h1 className="font-bold text-3xl text-black">OneLot</h1>
        </div>

        <nav className="space-x-10 hidden lg:flex">
          {navItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`text-lg font-medium ${
                item === "Home" ? "text-purple-600" : "text-black"
              } hover:text-purple-800`}
            >
              {item}
              {item === "Products" && (
                <span className="ml-1 text-sm">▼</span> 
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="lg:flex items-center space-x-6 hidden">
        <button className="text-lg font-medium text-black hover:text-purple-600">
          Log In
        </button>
        <button className="bg-purple-800 text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-purple-700">
          Inquire Now
        </button>
      </div>

      <div className="max-sm:flex hidden text-xl">
        <FaBars/>
      </div>
    </header>
  );
}

export default Navbar;
