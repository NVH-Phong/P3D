import Container from "@/components/Container";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white">
      <Container className="max-w-6xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-darkColor to-blue-600 bg-clip-text text-transparent">
            About P3D
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming imagination into reality through cutting-edge 3D
            technology
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-darkColor flex items-center gap-3">
            <span className="w-2 h-8 bg-darkColor rounded-full"></span>
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            P3D is your premier destination for high-quality 3D products and
            innovative design solutions.{" "}
            <span className="font-semibold text-darkColor">
              Founded in 2025
            </span>
            , we specialize in bringing creativity to life through cutting-edge
            3D technology and exceptional craftsmanship.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our passion lies in transforming ideas into tangible reality.
            Whether you&apos;re looking for custom 3D-printed items, unique
            design pieces, or innovative products, we deliver excellence with
            every creation.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-12 bg-linear-to-br from-darkColor/5 to-blue-50 rounded-2xl p-8 md:p-12 border border-darkColor/10">
          <h2 className="text-3xl font-bold mb-6 text-darkColor flex items-center gap-3">
            <span className="w-2 h-8 bg-darkColor rounded-full"></span>
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-darkColor">
                Creative Design
              </h3>
              <p className="text-gray-600">
                State-of-the-art technology combined with artistic vision to
                create exceptional products
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2 text-darkColor">
                Custom Solutions
              </h3>
              <p className="text-gray-600">
                Tailored 3D-printed items designed to meet your unique
                specifications
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-darkColor">
                Quality Excellence
              </h3>
              <p className="text-gray-600">
                Every product meets the highest standards of quality and
                precision
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-darkColor flex items-center gap-3">
            <span className="w-2 h-8 bg-darkColor rounded-full"></span>
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At P3D, we believe that 3D technology opens endless possibilities
            for creativity and innovation. Our team is dedicated to pushing the
            boundaries of what&apos;s possible, ensuring every product we offer
            meets the highest standards of quality and design.
          </p>
          <div className="bg-darkColor/5 border-l-4 border-darkColor p-6 rounded-r-lg">
            <p className="text-xl font-semibold text-darkColor italic">
              &quot;We&apos;re committed to making your vision a reality, one
              layer at a time.&quot;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Journey</h2>
          <p className="text-lg mb-6 text-gray-600">
            Experience the future of 3D design and manufacturing with P3D
          </p>
          <Link
            href="/"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Our Products
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
