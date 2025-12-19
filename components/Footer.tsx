import { quickLinksData } from '@/constants';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-deepPurple/5 via-trapperGreen/5 to-modernPink/5 border-t border-border/50 backdrop-blur-sm">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>P3D</Logo>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover premium 3D printing services and models, blending quality
              and innovation to bring your ideas to life.
            </p>
            <SocialMedia
              className="text-deepPurple"
              iconClassName="border-deepPurple hover:border-trapperGreen hover:text-trapperGreen hover:shadow-lg hover:shadow-trapperGreen/20"
              tooltipClassName="bg-gradient-to-r from-deepPurple to-trapperGreen text-white"
            />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-deepPurple">
              CONTACT US
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-foreground font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-muted-foreground text-xs">
                  (By appointment only)
                </p>
              </div>
              <div>
                <p className="text-trapperGreen uppercase mb-1 font-semibold">
                  PHONE
                </p>
                <p className="text-foreground">+61 422261459</p>
              </div>
              <div>
                <p className="text-trapperGreen uppercase mb-1 font-semibold">
                  EMAIL
                </p>
                <p className="text-foreground">hphong1132@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-deepPurple">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-muted-foreground hover:text-trapperGreen text-sm font-medium hoverEffect relative group"
                  >
                    <span className="relative z-10">{item?.title}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-trapperGreen transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-deepPurple">
              Newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2.5 border-2 border-deepPurple/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-trapperGreen focus:border-trapperGreen bg-background/50 text-foreground placeholder:text-muted-foreground transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-deepPurple to-trapperGreen text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-trapperGreen/30 transition-all duration-300 font-semibold"
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
