import { Link } from "react-router-dom";
import CommonWrapper from "../common/CommonWrapper";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 text-gray-400">
      <CommonWrapper>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white">
              TEST<span className="text-purple-500">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Building the future of 3D web experiences with cutting-edge technology and premium design.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Components</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Templates</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-purple-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
            <p className="mt-4 text-xs">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Test. All rights reserved.</p>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;