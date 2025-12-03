import React from "react";
import Container from "./Container";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Youtube,
  Github,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lightBg border-t border-gray-light/30">
      {/* Top Info Section */}
      <div className="border-b border-gray-light/30 py-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Visit Us */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-darkColor" />
              </div>
              <div>
                <h3 className="font-semibold text-darkColor mb-1">Visit Us</h3>
                <p className="text-sm text-lightColor">Your City, Country</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-darkColor" />
              </div>
              <div>
                <h3 className="font-semibold text-darkColor mb-1">Call Us</h3>
                <p className="text-sm text-lightColor">+1 234 567 890</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-darkColor" />
              </div>
              <div>
                <h3 className="font-semibold text-darkColor mb-1">
                  Working Hours
                </h3>
                <p className="text-sm text-lightColor">
                  Mon - Sat: 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-darkColor" />
              </div>
              <div>
                <h3 className="font-semibold text-darkColor mb-1">Email Us</h3>
                <p className="text-sm text-lightColor">hello@phong3d.com</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-darkColor mb-3">
                PHONG 3D
              </h2>
              <p className="text-sm text-lightColor mb-6 leading-relaxed">
                Discover curated 3D printing solutions at Phong 3D, blending
                innovation and precision to elevate your creative projects.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-light rounded-full flex items-center justify-center hoverEffect hover:bg-darkColor hover:text-white hover:border-darkColor"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-light rounded-full flex items-center justify-center hoverEffect hover:bg-darkColor hover:text-white hover:border-darkColor"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-light rounded-full flex items-center justify-center hoverEffect hover:bg-darkColor hover:text-white hover:border-darkColor"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-light rounded-full flex items-center justify-center hoverEffect hover:bg-darkColor hover:text-white hover:border-darkColor"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 border border-gray-light rounded-full flex items-center justify-center hoverEffect hover:bg-darkColor hover:text-white hover:border-darkColor"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-darkColor mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-darkColor mb-4">
                Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/category/3d-models"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    3D Models
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/3d-printers"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    3D Printers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/filaments"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Filaments
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/accessories"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/tools"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/software"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/others"
                    className="text-sm text-lightColor hoverEffect hover:text-darkBlue hover:translate-x-1 inline-block"
                  >
                    Others
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-darkColor mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-lightColor mb-4 leading-relaxed">
                Subscribe to our newsletter to receive updates and exclusive
                offers.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-gray-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-darkBlue focus:border-transparent"
                />
                <button className="w-full bg-darkColor text-white py-2.5 rounded-lg text-sm font-medium hoverEffect hover:bg-darkBlue">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-light/30 py-6">
        <Container>
          <p className="text-center text-sm text-lightColor">
            © {new Date().getFullYear()} Phong 3D. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
