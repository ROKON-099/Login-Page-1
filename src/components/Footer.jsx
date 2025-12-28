import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      
      {/* Services */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="#" className="link link-hover">Branding</Link>
        <Link to="#" className="link link-hover">Design</Link>
        <Link to="#" className="link link-hover">Marketing</Link>
        <Link to="#" className="link link-hover">Advertisement</Link>
      </nav>

      {/* Company */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/jobs" className="link link-hover">Jobs</Link>
        <Link to="#" className="link link-hover">Press kit</Link>
      </nav>

      {/* Social */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
            </svg>
          </a>

          <a href="#" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246..." />
            </svg>
          </a>

          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current" width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5..." />
            </svg>
          </a>
        </div>
      </nav>

    </footer>
  );
};

export default Footer;
