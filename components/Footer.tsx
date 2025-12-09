import { quickLinksData } from "@/constants";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>P3D</Logo>
            <p className="text-gray-600 text-sm">
              Discover curated furniture collections at Tulos, blending style
              and comfort to elevate your living spaces.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">CONTACT US</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-900 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-500 text-xs">(By appointment only)</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase mb-1">PHONE</p>
                <p className="text-gray-900">+61 422261459</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase mb-1">EMAIL</p>
                <p className="text-gray-900">hphong1132@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
