import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h3 className="text-white rounded-full bg-green-600 px-4 py-1">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <button className="text-green-600">Sign In</button>
        <button className="text-green-600 border-2 border-green-600 rounded-full px-4 py-1">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
