import { Link } from "react-router-dom";
import CommonWrapper from "../common/CommonWrapper";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <CommonWrapper className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          Test<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-8 md:flex">
          <Link to="/" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Home</Link>
          <Link to="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Features</Link>
          <Link to="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Showcase</Link>
          <Link to="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Pricing</Link>
        </div>

        {/* CTA Button */}
        <div>
          <button className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Get Started
          </button>
        </div>
      </CommonWrapper>
    </nav>
  );
};

export default Navbar;