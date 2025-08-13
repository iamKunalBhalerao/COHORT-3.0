const Navbar = () => {
  return (
    <>
      <nav className="w-full max-w-8xl bg-gray-950 py-4 mx-auto flex items-center justify-around">
        <h1>100xDevs</h1>
        <div className="flex gap-4">
            <button className="cursor-pointer text-xl px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg border-0 transition-all duration-300 ease-in-out hover:scale-105">
              Sign Up
            </button>
            <button className="cursor-pointer text-xl px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg border-1 border-slate-500 transition-all duration-300 ease-in-out hover:scale-105">
              Sign In
            </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
